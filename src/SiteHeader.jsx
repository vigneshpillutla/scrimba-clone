import React from 'react';
import macbookGuy from './svgs/macbook-guy.svg'
function SiteHeader(){
    return (
        <div className="site-header-container">
            <div className="site-header">
                <h1 id="var_size_header">Don't spend $15,000 on a coding bootcamp</h1>
                <h3 id="var_size_text">Our career path helps motivated students become hireable frontend developers for 1% of the cost </h3>
                <button class="try-out">Try It Out Now!</button>
            </div>
            <div className="standing-guy">
                <img src={macbookGuy} alt=""/>
            </div>
        </div>
    )
}

export default SiteHeader;