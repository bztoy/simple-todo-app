import React from 'react'
import ReactDOM from 'react-dom'
import { MyContext } from './context'
import './App.css'

// component file
import TodoContainer from './components/TodoContainer'
ReactDOM.render(
  <MyContext>
    <TodoContainer />
  </MyContext>,
  document.getElementById('root')
)
