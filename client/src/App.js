import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <main>Welcome to our shop</main>
      </Container>
      <Footer />
    </>
  )
}

export default App
