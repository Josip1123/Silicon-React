//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer'
import Header from "./components/Header"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"

function App() {

  return (

    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
