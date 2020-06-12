import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  render () {
    const { todos, onHandleChangeProps, onHandleDelTodo } = this.props
    return (
      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onHandleChangeProps={onHandleChangeProps}
            onHandleDelTodo={onHandleDelTodo}
          />
        ))}
      </div>
    )
  }
}
export default TodoList
