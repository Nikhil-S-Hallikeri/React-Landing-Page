import React from 'react';
import './Header.css';

import manImage from '../assets/man-with-letter.png';
import paperPlaneImage from '../assets/plane.png';
import logo from '../assets/logo.png';
import selectedImage from '../assets/Selected.png';
import buildingImag from '../assets/city-skyline.png';
import enquireNow from '../assets/Enquiry-now.png';
import offerLetter from '../assets/Vector 426.png';

const Header = () => {
    return (
        <>
            <nav className="navbar">
                <img src={logo} alt="Merida Logo" className="logo" />
            </nav>

            <header className="hero-section">
                <img src={paperPlaneImage} alt="Paper plane" className="paper-plane" />

                <div className="hero-container">
                    <div className="hero-content">
                        <div className="headline">
                            <span className="line-one">You're</span>
                            <img src={selectedImage} alt="selected text with effect" className="selected-image" />
                        </div>
                        <p className="sub-headline">
                            Start your <span className="highlight" style={{ fontFamily: 'Tusker Grotesk' }}>course</span> with <span className="highlight" >offer letter</span>
                        </p>
                        <span className="terms">*T&C applied</span>
                    </div>

                    <div>
                        <img className="building1" src={buildingImag} alt="" />
                    </div>
                    <div>
                        <img className="building2" src={buildingImag} alt="" />
                    </div>

                    <div className="hero-image-container">
                        <img src={manImage} alt="Man holding an offer letter" className="man-image" />
                    </div>

                    <div className="enquiry-form-container">
                        <h3>Enquiry Form</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact">Contact Number</label>
                                <input type="text" id="contact" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="course">Course</label>
                                <select id="course">
                                    <option value=""></option>
                                    <option value="data-science">Data Science</option>
                                    <option value="python">Python</option>
                                    <option value="java">Java</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <input type="text" id="location" />
                            </div>
                            <button type="submit" className="submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
                <span className="enquire-now">
                    <a href="https://www.example.com" target="_blank">
                        <img src={enquireNow} alt="Clickable Example" class="clickable-img" />
                    </a>
                </span>
                <span className="offer-letter">
                    <a href="https://www.example.com" target="_blank">
                        <img src={offerLetter} alt="Clickable Example" class="offer-letter" />
                    </a>
                </span>
            </header>
        </>
    );
};

export default Header;