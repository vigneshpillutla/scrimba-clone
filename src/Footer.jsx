import React from 'react';
import darkLogo from './svgs/dark-logo.svg'
function Footer(){
    return (
        <div className="footer">
            <div className="media-handles-container">
                <img src={darkLogo} alt=""/>
                <div className="link-data">
                <a href="">Home</a>
                <a href="">Discord</a>
                <a href="">Twitter</a>
                <a href="">Youtube</a>
                </div>


            </div>
            <div className="other-links">
                <b>Resources</b>
                <div className="link-data">
                <a href="">Blog</a>
                <a href="">FAQ</a>
                <a href="">Terms</a>
                <a href="">Privacy</a>
                </div>
            </div>
            <div className="other-links">
                <b>Courses</b>
                <div className="link-data">
                    <a href="">All courses</a>
                    <a href="">Intro courses</a>
                    <a href="">Learn Javascript</a>
                    <a href="">Learn React</a>
                </div>

            </div>
            <div className="other-links">
                <b>Company</b>
                <div className="link-data">
                    <a href="">About us</a>
                    <a href="">Contact us</a>
                    <a href="">Support chat</a>
                    <a href="">Gift Membership</a>
                </div>

            </div>
        </div>
    )
}

export default Footer;