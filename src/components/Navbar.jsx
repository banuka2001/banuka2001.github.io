import React from 'react';
import { Link } from 'react-router-dom';

import { GiSupersonicArrow } from "react-icons/gi";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

// import DarkModeToggle from './DarkModeToggle';

import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <GiSupersonicArrow className="text-primary me-4" size={28} />
          <span className="fw-bold fs-4">
            <span className="text-primary me-2">I</span>
            <span className="text-warning">am</span>
          </span>
        </Link>

        {/* Toggler */}
             <button
                className="navbar-toggler border-remove"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className={`toggler-icon-wrapper ${isOpen ? 'is-open' : ''}`}>
                  {isOpen ? (
                    <IoMdClose className="text-warning" size={30} />
                  ) : (
                    <HiMenu className="text-warning" size={30} />
                  )}
                </span>
              </button>



        {/* Collapsible content */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarContent">
          <div className="w-100 d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center">

            {/* Nav Links */}
            <ul className="navbar-nav ms-5 mb-3 mb-lg-0 text-end text-lg-center fs-6">
              <li className="nav-item">
                <Link className="nav-link active fw-semibold" to="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>

              <li className="nav-item">
                <a className="nav-link fw-semibold" href="/#aboutMe" onClick={() => setIsOpen(false)}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="/#projectCards" onClick={() => setIsOpen(false)}>Projects</a>
               
              </li>
              <li className="nav-item">
                <Link className="nav-link  fw-semibold" to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
            
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            
              </li>
            </ul>

          
          </div>
        </div>
      </div>
    </nav>
  );
}
