import React from 'react'
import AddTodoForm from './AddTodoForm'

const Header = () => {
  return (
    <header className="header">
		<h1>todos</h1>
        <AddTodoForm />	
	</header>
  )
}

export default Header