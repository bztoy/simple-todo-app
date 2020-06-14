// import React from 'react'

// class TodoItem extends React.Component {
//   componentWillUnmount () {
//     alert('Item about to be deleted!')
//   }

//   render () {
//     const { todo, onHandleChangeProps, onHandleDelTodo } = this.props

//     const { completed, id, title } = todo

//     const completedStyle = {
//       fontStyle: 'italic',
//       color: '#d35e0f',
//       opacity: 0.4,
//       textDecoration: 'line-through'
//     }

//     return (
//       <div>
//         <li className='todo-item'>
//           <input
//             type='checkbox'
//             checked={completed}
//             onChange={() => onHandleChangeProps(id)}
//           />
//           <button onClick={() => onHandleDelTodo(id)}>Delete</button>
//           <span style={completed ? completedStyle : null}>
//             {title}
//           </span>
//         </li>
//       </div>
//     )
//   }
// }

/* global alert */
import React, { useEffect } from 'react'

const TodoItem = props => {
  const { todo, handleChangeProps, deleteTodoProps } = props
  const { completed, id, title } = todo

  const completedStyle = {
    fontStyle: 'italic',
    color: '#d35e0f',
    opacity: 0.4,
    textDecoration: 'line-through'
  }

  useEffect(() => {
    return () => {
      alert('Item about to be deleted!')
    }
  }, [])

  return (
    <div>
      <li className='todo-item'>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button onClick={() => deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </li>
    </div>
  )
}

export default TodoItem
