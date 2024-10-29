//import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Brands from './components/Brands/Brands'


function App() {

  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Brands/>
      </main>
      <Footer/>
    </>
  )
}

export default App
