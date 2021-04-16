import React from 'react';
import many_people from './svgs/many-people.svg'
function DiscordJoin(){
    return (
        <div className="discord-banner">
            <h1>Join our Discord chat</h1>
            <p>1000+ online now</p>
            <button>Enter Chat</button>
            <div>
            <img src={many_people} alt=""/>
            </div>
        </div>
    )
}

export default DiscordJoin;