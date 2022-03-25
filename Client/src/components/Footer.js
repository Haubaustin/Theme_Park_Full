import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  
    return (
    <div className="Footer">
        <a href="https://www.linkedin.com/in/austin-haubenschild-211472169/" 
            className="linkedin" 
            target="_blank" 
            rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/dejuan-deal-28b274218/" 
            className="linkedin"
            target="_blank" 
            rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/eloy-sauceda-iii-583133137/" 
            className="linkedin"
            target="_blank" 
            rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/mark-harmon-805aa3232/" 
            className="linkedin"
            target="_blank" 
            rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
    </div>
    )
}
export default Footer