import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="header-navbar">
            <div className="container-fluid" id="nav-bar-bg-color">
               <div className="row">
                  <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to ="/"><img src="../images/logo.png" alt="brand-img"/></NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink className="nav-link mx-2" id="link-text-color" aria-current="page" to ="/"><strong>Home</strong></NavLink>
                                </li>

                                <li className="nav-item">
                                <NavLink className="nav-link mx-2" id="link-text-color1" to ="/about"><strong>About Us</strong></NavLink>
                                </li>

                                <li className="nav-item">
                                <NavLink className="nav-link mx-2" id="link-text-color1" to ="/portfolio"><strong>Portfolio</strong></NavLink>
                                </li>

                                <li className="nav-item">
                                <NavLink className="nav-link mx-2" id="link-text-color1" to ="/contact"><strong>Contact Us</strong></NavLink>
                                </li>

                            </ul>
                            <form className="d-flex">
                                <NavLink className="btn btn-outline-success me-2 border-0 text-white px-3 py-2"  to="/" id="nav-bar-btn-color">Get A Quote</NavLink>
                                <NavLink to ="/" className="py-1"><img src="../images/square_menu_icon1.png" alt="icon-img"/></NavLink>
                            </form>
                            </div>
                        </div>
                        </nav> 
                </div>
              </div>
            </div> 
        </div>
    )
}

export default Navbar
