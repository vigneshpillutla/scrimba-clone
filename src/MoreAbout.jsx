import React from 'react';
import thumbnail from './svgs/about-video-cover.webp'
import founders from './svgs/founders.webp'
function MoreAbout(){
    return (
        <div>
            <div className="about-platform">
                <div>
                    <img src={thumbnail} alt=""/>
                </div>
                <div>
                    <h1>About the platform</h1>
                    <p>Scrimba is the next-generation platform for learning how to code. Our screencasts enable you to interact with the code directly in the player. This way, you'll have more fun and learn faster.</p>
                    <p>Our courses cover subjects like HTML, CSS, JavaScript, React, Vue, and more. They're all made with the goal of advancing your career. So pick a course and give your career a boost!</p>
                </div>
            </div>
            <div className="about-founders">
                <div>
                    <h1>Hi! from the founders</h1>
                    <p>Our goal is to create the best possible coding school at the lowest possible cost for students. If we succeed with this, it’ll give anyone who wants to become a software developer a realistic shot at succeeding. Regardless of where they live and the size of their wallets.</p>
                    <p className="quote">“To achieve this, we’ve created a new video format for code screencasts. We call it “scrims”.</p>
                    <p>This format is the backbone of our school. Not only because it results in a superior learning experience. But also because it enables us to iterate more quickly, to attract better teachers, to facilitate better peer-learning, to keep server costs low, and much more.</p>
                </div>
                <div className="founder-contact">
                    <div>
                        <img src={founders} alt=""/>
                        <h2>Sindre & Per</h2>
                        <p>Connect us on Twitter</p>
                    </div>
                    <div className="contact-founder-button">
                        <button>Say Hi @Sindreears</button>
                        <button>Say Hi @Perborgen</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MoreAbout;