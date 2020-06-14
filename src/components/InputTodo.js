// import React, { Component } from 'react'

// class InputTodo extends Component {
//   state = {
//     title: ''
//   }

//   handleOnChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }

//   clearFieldsAfterSumbit () {
//     this.setState({
//       title: ''
//     })
//   };

//   handleSubmit = (e) => {
//     const { addTodoItem } = this.props

//     e.preventDefault()
//     addTodoItem(this.state.title)
//     this.clearFieldsAfterSumbit()
//     // console.log(this.state.title)
//   }

//   render () {
//     return (
//       <form onSubmit={this.handleSubmit} className='form-container'>
//         <input
//           type='text'
//           placeholder='Add todo........................................'
//           size='80'
//           value={this.state.title}
//           name='title'
//           onChange={this.handleOnChange}
//         />
//         <input type='submit' value='Submit' className='input-submit' />
//       </form>
//     )
//   }
// }

import React, { useState } from 'react'

const InputTodo = props => {
  const [inputText, setInputText] = useState({
    title: ''
  })

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addTodoProps(inputText.title)
    setInputText({
      title: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input
        type='text'
        className='input-text'
        placeholder='Add todo...'
        value={inputText.title}
        name='title'
        onChange={onChange}
      />
      <input type='submit' className='input-submit' value='Submit' />
    </form>
  )
}

export default InputTodo
