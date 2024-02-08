import React from 'react'
import './header.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div className="container px-5">
      <a className="navbar-brand" href="index.html">
        <img
          className="rounded img-fluid"
          src="src/assets/Picture1.png"
          width={60}
          height={60}
        />
        <span className="fw-bolder text-secondary" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="resume.html">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="projects.html">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header