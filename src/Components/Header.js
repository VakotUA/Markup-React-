import React from 'react'
import '../Components/Global.css'
import '../Components/Header.css'
import logo from '../Images/Logo.png'

function Header() {
  return (
      <div className="header">
        <div className="container">
          <div className="header_inner">
            <div className="logo">
              <img src={logo} alt="Logo.png" href="/"/>
              <h3>Dicision Mapper</h3>
            </div>
            <nav>
              <a className="nav_link" href="/">Work</a>
              <a className="nav_link" href="/">Secvices</a>
              <a className="nav_link" href="/">About</a>
              <a className="nav_link" href="/">Tutorials</a>
              <a className="nav_btn" href="/">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    )
}

export default Header