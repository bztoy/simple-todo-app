import React, { Component } from 'react'

class InputTodo extends Component {
  state = {
    title: ''
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  clearFieldsAfterSumbit () {
    this.setState({
      title: ''
    })
  };

  handleSubmit = (e) => {
    const { addTodoItem } = this.props

    e.preventDefault()
    addTodoItem(this.state.title)
    this.clearFieldsAfterSumbit()
    // console.log(this.state.title)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className='form-container'>
        <input
          type='text'
          placeholder='Add todo........................................'
          size='80'
          value={this.state.title}
          name='title'
          onChange={this.handleOnChange}
        />
        <input type='submit' value='Submit' className='input-submit' />
      </form>
    )
  }
}
export default InputTodo
