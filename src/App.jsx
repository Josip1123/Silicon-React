
import { HashRouter, Routes, Route } from "react-router-dom"
import { createContext, useState } from "react";
import Footer from './components/Footer'
import Header from "./components/Header"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"



export const WarningContext = createContext()


function App() {
  
  const [isWarningDismissed, setIsWarningDismissed] = useState(false)
  const message = "There are many scams and phishing attempts right now. Always double-check that the email is coming from us."

  return (

    <WarningContext.Provider value={[isWarningDismissed, setIsWarningDismissed, message]}>
      <HashRouter >
        <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        <Footer />
      </HashRouter>
    </WarningContext.Provider>

  )
}

export default App
