import React, { useState, useEffect } from 'react'
import TodosList from './TodosList'
import Header from './Header'
import InputTodo from './InputTodo'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

// class TodoContainer extends React.Component {
//   state = {
//     todos: [],
//     show: false
//   };

//   handleChange = (id) => {
//     this.setState({
//       todos: this.state.todos.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed
//         }
//         return todo
//       }),
//       show: !this.state.show
//     })
//   };

//   handleDelTodo = (id) => {
//     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
//       .then(reponse =>
//         this.setState({
//           todos: [
//             ...this.state.todos.filter(todo => { return todo.id !== id })
//           ]
//         })
//       )
//   };

//   addTodoItem = title => {
//     axios.post('https://jsonplaceholder.typicode.com/todos', {
//       title: title,
//       completed: false
//     }).then(
//       response => {
//         const data = response.data
//         data.id = uuidv4()

//         this.setState({
//           todos: [...this.state.todos, data]
//         })
//       }
//     )
//   };

//   componentDidMount () {
//     axios.get('https://jsonplaceholder.typicode.com/todos', {
//       params: {
//         _limit: 10
//       }
//     }).then(response => {
//       const modifiedData = response.data.map(data => {
//         data.id = uuidv4()
//         return data
//       })
//       this.setState({ todos: modifiedData })
//     })
//   };

//   render () {
//     return (
//       <div className='container'>
//         <Header headerSpan={this.state.show} />
//         <InputTodo addTodoItem={this.addTodoItem} />
//         <TodosList
//           todos={this.state.todos}
//           onHandleChangeProps={this.handleChange}
//           onHandleDelTodo={this.handleDelTodo}
//         />
//       </div>
//     )
//   }
// }

const TodoContainer = (props) => {
  const [todos, setTodos] = useState([])
  const [show, setShow] = useState(false)

  const handleChange = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
    setShow(!show)
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      })
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  // with an empty array in the 2nd parameter, with function will work
  // like the event componentDidMount
  useEffect(() => {
    console.log('test run')
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => setTodos(response.data))
  }, [])

  return (
    <div className='container'>
      <Header headerSpan={show} />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
      />
    </div>
  )
}

export default TodoContainer
