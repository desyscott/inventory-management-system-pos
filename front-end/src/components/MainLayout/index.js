import React from 'react'
import NavBar from '../NavBar'
import Footer from "../Footer"
import "./index.css"


function MainLayout({children}) {
  return (
    <div  className="grid-container">
     <header className="header">
      <NavBar />
      </header>
      
      <main className="main">
      {children}
      </main>
      
      <footer className="footer">
      <Footer/>
    </footer>
    
    </div>
  )
}

export default MainLayout