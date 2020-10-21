import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <main className='py-3'>
          <h2>Welcome to our shop</h2>
        </main>
      </Container>
      <Footer />
    </>
  )
}

export default App
