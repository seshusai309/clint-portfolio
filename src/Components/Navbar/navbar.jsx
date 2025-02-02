import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css'; // Import custom CSS for transitions

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navbarCollapseRef = useRef(null);

  const handleNavCollapse = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setIsNavCollapsed(!isNavCollapsed);
    }
  };

  useEffect(() => {
    const navbarCollapseElement = navbarCollapseRef.current;

    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };

    if (navbarCollapseElement) {
      navbarCollapseElement.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      if (navbarCollapseElement) {
        navbarCollapseElement.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Portfolio</a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`navbar-collapse ${!isNavCollapsed ? 'show' : ''}`}
          id="navbarSupportedContent"
          ref={navbarCollapseRef}
          style={{
            height: !isNavCollapsed ? navbarCollapseRef.current?.scrollHeight + 'px' : '0',
            overflow: 'hidden',
            transition: 'height 0.3s ease',
          }}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home" onClick={handleNavCollapse}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleNavCollapse}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience" onClick={handleNavCollapse}>Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={handleNavCollapse}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={handleNavCollapse}>Projects</a>
            </li>
          </ul>
          <div className="ms-auto">
            <button className="btn btn-primary">Hire Me</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;