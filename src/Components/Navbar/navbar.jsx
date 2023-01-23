import React, { useEffect,useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import logo from '../../Assets/logo.png'
import {HiBars3BottomRight} from 'react-icons/hi2'
import { FaHome } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaAddressBook } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { SiYourtraveldottv } from "react-icons/si";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNav = () => {
    setActive("navBar");
  };

  //code statement to add a background color to the header.
  const [transparent, setTransparent] = useState("header");
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  };
  window.addEventListener("scroll", addBg);

  return (
    <section className="navBarSection">
      <header className={transparent}>
        <div className="logoDiv">
          <NavLink to="/" exact className="logo flex">
            <img src={logo} alt="" style={{width:'200px'}}/>
          </NavLink>
        </div>

        <div className={active}>
          <ul onClick={removeNav} className="navLists ">
            <li className="navItem">
              <NavLink to="/" exact className="navLink">
                Home
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/" exact className="navLink">
                About Us
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/" exact className="navLink">
                Services
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/" exact className="navLink">
                Technologies{" "}
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/" exact className="navLink">
                Testimonials
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/contactus" exact className="navLink">
                Contact Us
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/blog" exact className="navLink">
                Blog
              </NavLink>
            </li>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;