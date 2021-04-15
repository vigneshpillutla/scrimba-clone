import React from 'react';

function Navbar(){
    return(
        <nav>
            <div className="logo-name">
            <img className="logo" src="https://bookface-images.s3.amazonaws.com/small_logos/b4d293bb82fbcecd4ed3961acb48f34bb29f5003.png" alt=""/>
            <h3 className="companyName">scrimba</h3>
            </div>
            <ul className="nav-links">
                <li id="offer-link"><a href="/">Go Pro!</a></li>
                <li>All Courses</li>
                <li>Sign In</li>
                <li className="signup">Sign Up</li>
            </ul>
        </nav>
    )
}

export default Navbar;