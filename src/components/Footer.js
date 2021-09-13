import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div>
                <div className="footer">
                    <div align="center" position = " absolute" bottom="0px" className="footerCredit">
                        <span >Major Project</span>
                    </div>
                    
                </div> 
        </div>
    );
}

export default Footer;