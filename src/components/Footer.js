import "./FooterStyles.css"
import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
                
                <div>
                    <h3>CONTACT</h3>
                </div>
            </div>
            
            <div className="email">
                <h4>
                    <FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <a href="mailto: mark@squareresults.com">mark@squareresults.com</a>
               </h4>
            </div>
            </div>

            <div className="right">
                <p>7150 East Camelback Rd Suite 444</p>
                <p>Scottsdale, AZ 85251</p>
         
            </div>
        </div>

    </div>
  )
}

export default Footer