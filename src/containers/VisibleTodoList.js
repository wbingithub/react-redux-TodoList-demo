import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed)
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed)
        default:
            return todos
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps, // 负责输入逻辑，即将state映射到 UI 组件的参数（props）
    mapDispatchToProps // 负责输出逻辑，即将用户对 UI 组件的操作映射成 Action。
)(TodoList)

export default VisibleTodoList