// import React from 'react'
// import TodoItem from './TodoItem'

// class TodoList extends React.Component {
//   render () {
//     const { todos, onHandleChangeProps, onHandleDelTodo } = this.props
//     return (
//       <div>
//         {todos.map(todo => (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             onHandleChangeProps={onHandleChangeProps}
//             onHandleDelTodo={onHandleDelTodo}
//           />
//         ))}
//       </div>
//     )
//   }
// }

import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  const { todos, handleChangeProps, deleteTodoProps } = props

  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
        />
      ))}
    </div>
  )
}

export default TodoList
