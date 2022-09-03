import React from 'react'
import "../styles/project.css";

export default function header() {
  return (
    <div>
       <div className="header">
         <nav className="navbar navbar-expand-lg bg-white ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="assets/images/Assets/Logo.png"  alt="logo"/> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <a className="active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="" href="/">About Me</a>
                    </li>
                    <li className="nav-item">
                    <a className=" " href="/">Works</a>
                    </li>
                    <li className="nav-item">
                    <a className="" href='/'>Contact Me</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div> 
    </div>
  )
}
