import "./FooterStyles.css"
import React from 'react'
import { FaMailBulk } from "react-icons/fa"

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
                    <a href="mailto: testemail.com">testemail.com</a>
               </h4>
            </div>
            </div>

            <div className="right">
                <p>5555 East Camelback Rd</p>
                <p>Scottsdale, AZ 12345</p>
         
            </div>
        </div>

    </div>
  )
}

export default Footer