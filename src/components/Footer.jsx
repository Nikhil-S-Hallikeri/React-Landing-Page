import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import instagram from '../assets/skill-icons_instagram.png';
import linkedin from '../assets/skill-icons_linkedin.png';
import facebook from '../assets/logos_facebook.png';
import youtube from '../assets/logos_youtube-icon.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <div className="footer-logo-section">
                    <img src={logo} alt="Merida Logo" className="footer-logo" />
                </div>
                <div className="footer-links-section">
                    <div className="footer-link-col">
                        <h4>Contact</h4>
                        <p>6449473992</p>
                    </div>
                     <div className="footer-link-col">
                        <h4>Email</h4>
                        <p>agasa@gmail.com</p>
                    </div>
                     <div className="footer-link-col">
                        <h4>Location Map</h4>
                        <a href="#">Click here</a>
                    </div>
                     <div className="footer-link-col">
                        <h4>Address</h4>
                        <p>2nd Block, Jaya Nagara, Bengaluru, Karnataka, India</p>
                    </div>
                </div>
                <div className="footer-social-section">
                    <a href="#" aria-label="Instagram"><img src={instagram} alt="Instagram"/></a>
                    <a href="#" aria-label="LinkedIn"><img src={linkedin} alt="LinkedIn"/></a>
                    <a href="#" aria-label="Facebook"><img src={facebook} alt="Facebook"/></a>
                    <a href="#" aria-label="YouTube"><img src={youtube} alt="YouTube"/></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;