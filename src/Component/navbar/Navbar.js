import React, { useState } from "react";
import "./Navbar.css"

function Navbar() {
  const [click, setClick] = useState(false);
  // const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const changeBackground = (val) => {
  //   if (window.scrollY >= 10) {
  //     setNavbar(true);
  //   } else if (val === "click") {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // window.addEventListener("scroll", changeBackground);
  // {navbar ? "navbar sticky" : "navbar"}

  return (
    <>
      <nav className="navbar ">
        <div className="navbar-container">
          <a href="#home" className="navbar-logo" onClick={closeMobileMenu}>
            MIFTAHUL<span>HUDA</span>
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="#home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-links" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#project"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Project
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
