import React from 'react'
import { Link } from "react-router-dom";

import './style.scss'

export default function Navbar() {
  return (
    <div className='primary-navbar'>
        
        <div className="container-col-lg-12">
            <div className="logo">
                <h1><span>Bandeli</span> / <span>Dev Web</span></h1>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Projects</Link>
                </li>
                <li>
                    <Link to="/">Academic</Link>
                </li>
                <li>
                    <Link to="/">Dev comunity</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </div>

    </div>
  )
}
