import { ddbs as dd } from 'ddeyes'
import React, { Component } from 'react'
import Input from '../../../StoryView/src/components/input'
import List from '../../../StoryView/src/components/list'
import Title from '../../../StoryView/src/components/title'
import { prefixDom } from 'cfx.dom'
import { connect } from 'cfx.react-redux'
import { store } from 'ReduxServ'
{ 
  actions 
  reducers
} = store
import { getState } from './components'

CFX = prefixDom {
  Title
  Input
  List
  'div'
}

class StoryTodos extends Component

  constructor: (props) ->
    super props
    @state = 
      filter: props.state.filter
      todos: []
    @

  componentWillReceiveProps: (nextProps) ->
    {
      filter
      todos
    } = nextProps.state
    @setState {
      filter
      todos
    }
    @
    

  render: ->
    
    {
      c_div
      c_Title
      c_Input
      c_List
    } = CFX
    
    Packet = (bool, data) ->
          console.log "hello"
          data.reduce (r, c) =>
            [
              r...
              (
                if c.isCompleted is bool
                then [ c ]  
                else []
              )...
            ]             
          , []
    c_div {}
    ,
      c_Title {}
      c_Input
        filter: @props.state.filter

        selector: (
          (filter) ->
            @props.actions.filterSave
              filter: filter
        ).bind @
        data: store.store.getState().todosRedux.todos

        blur: (
          (v) ->
            @props.actions.create todo: v
              
        ).bind @
        
      c_List
        # data: @state.todos
        data: 
          switch @state.filter
            when 'active' then Packet false, @state.todos
            when 'completed' then Packet true, @state.todos
            when 'all' then @state.todos
          
        styleChange: (
          (id,isCompleted) ->
            textDecorationLine: 'line-through' if isCompleted is true
        ).bind @
        

        Delete: (
          (key) ->
            @props.actions.removeOne
              id: key
        ).bind @

        Patch: (
          (key, value) ->
            @props.actions.patch
              id: key
              todo: value
              isCompleted: false
        ).bind @
      
        hasClick: (
          (key, todo, isCompleted) ->
            @props.actions.patch
              id: key
              todo: todo
              isCompleted: !isCompleted
        ). bind @
        
        
        
        
mapStateToProps = (state) ->
  getState state.todosRedux

mapActionToProps =
  filterSave: actions.filterSave
  create: actions.todosCreate
  removeOne: actions.todosRemoveOne
  patch: actions.todosPatch
  save: actions.todosSave

export default connect(
  mapStateToProps
  mapActionToProps
  StoryTodos
)