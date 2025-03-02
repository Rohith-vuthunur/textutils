import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark text-${props.mode==="dark"?"light":"dark"} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <h2>TextUtils</h2><br/> */}
                <Link className={`navbar-brand  text-${props.mode==="light"?"dark":"light"}`} to="/">{props.title}</Link>
                <button className={`navbar-toggler text-${props.mode==="light"?"dark":"light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className={`navbar-toggler-icon`}></span>
                </button>
                <div className={`collapse navbar-collapse `} id="navbarSupportedContent">
                <ul className={`navbar-nav me-auto mb-2 mb-lg-0 text-${props.mode==="light"?"dark":"light"}`}>
                    <li className="nav-item">
                    <Link className={`nav-link active text-${props.mode==="light"?"dark":"light"}`} aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link text-${props.mode==="light"?"dark":"light"}`} to="/about">About</Link>
                    </li>
                    
                </ul>
                {/* <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                 <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">ChangeMode</label>
                  </div>
                </div>
            </div>
    </nav>
  )
 
}
Navbar.propTypes={ title : PropTypes.string.isRequired,    
}
