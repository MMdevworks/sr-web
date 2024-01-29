import "./HeroImgStyles.css";
import React from "react";
import hero from "../assets/hero3.png";
import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="hero-img" src={hero} alt="hero"/>
        </div>
        <div className="content">
            <p>JOIN US MONDAY JANUARY 29TH FOR THE RADAR CHAT</p>

            <div>
                <Link to="/register" className="btn">Register Here!</Link>
            </div>

        </div>
    </div>
  )
}

export default HeroImg