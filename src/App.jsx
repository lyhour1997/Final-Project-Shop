import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Bootombar from "./components/BottomBar"
import { Outlet } from "react-router-dom"

function App() {


  return (
      <>
          <header>
              <Header />
          </header>
          <main >
             {/* home,product,cart  */}
             <Outlet />
          </main>
          <footer>
              <Footer />
          </footer>

          <Bootombar />
      </>
  )
}

export default App
