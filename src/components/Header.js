import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
      <>
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact us
            </Link>
          </li>
        </ul>
      </header>
    </div>
    
    </>
  );
}

export default Header;
