import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import './App.css'

 class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-dark fixed-top">
            <button type="button" className="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between mx-auto" id="nav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <span className="nav-link text-warning text-uppercase font-weight-bold px-3">MY BLOG</span>
                </li>
                <Link to="/post" className="link-style">
                    <li className="nav-item">
                        <span className="nav-link text-light text-uppercase font-weight-bold px-3">ADD POST</span>
                    </li>
                </Link>
                <Link to="/blog" className="link-style">
              <li className="nav-item">
                <span className="nav-link text-light text-uppercase font-weight-bold px-3">BLOG</span>
              </li>
              </Link>
              <li className="nav-item">
              <span className="nav-link text-light text-uppercase font-weight-bold px-3">SIGN UP</span>
              </li>
            </ul>
          </div>
        </nav>
    
        )
    }
}

export default Nav
