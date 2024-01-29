import { Link } from "react-router-dom";
import React, {useState} from "react";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import sr from "../assets/SR1.png";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=1){
            setColor(true);
        }else{
            setColor(false);
        }
    };

window.addEventListener("scroll", changeColor);

  return (
    // <div className="header">
    <div className={color ? "header header-bg" : "header"}>
        <Link to ="/">
            <img className="sr-img" src={sr} alt="hero"/>
            {/* <h1>SR</h1> */}
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/careers">Careers</Link>
            </li>
            <li>
                <Link to="/events">Events</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style={{color: "#ffffff"}}/>
            ) : (
            <FaBars size={20} style={{color: "#ffffff"}}/>
            )}
        </div>
    </div>
  )
}

export default Navbar