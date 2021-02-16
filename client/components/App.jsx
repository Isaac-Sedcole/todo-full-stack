import React, { useEffect, useState } from 'react'
import { fetchTodos } from '../actions'
import AddTodo from './AddTodo'
// import DeleteTodos from './DeleteTodos'
import Footer from './Footer'
import ShowTodos from './ShowTodos'
import { connect } from 'react-redux'
// import UpdateTodos from './UpdateTodos'

function App (props) {
  
  // const [refresh, setRefresh] = useState(false)
  
  useEffect(() => {
    props.dispatch(fetchTodos())
  }, [])



  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
      <ShowTodos />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default connect()(App)
