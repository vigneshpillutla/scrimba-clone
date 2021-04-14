import React from 'react';
import wheelchair from './svgs/wheelchair.svg';
import bearded_man from './svgs/bearded_man.svg';
function About(){
    return (
        <div className="abt-sec-wrapper">
            <div className="about-section">
            <img id="wheelchair" src={wheelchair} alt=""/>
            <img id="bearded_man" src={bearded_man} alt=""/>
            <div className="about-section-content">
                <div className="content">
                    <div>
                        <h2>A coding community like no other</h2>
                    </div>
                    <h3>Not a boring forum. But live events, stand-ups, competitions, and more.</h3>
                </div>
                <div className="content">
                    <div>
                        <h2 id="green-content">A mind-blowing way to learn to code</h2>
                    </div>
                    <h3>Our interactive code-learning tool has been <a href="https://twitter.com/search?q=scrimba%20blowing&src=typed_query">blowing minds</a> since 2017.</h3>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default About;