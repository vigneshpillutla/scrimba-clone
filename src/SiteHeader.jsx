import React from 'react';
import blob from './svgs/blobDiff.svg'
import macbookGuy from './svgs/macbook-guy.svg'
function SiteHeader(){
    return (
        <div className="site-header-container">
            <div className="site-header">
                <h1>Don't spend $15,000 on a coding bootcamp</h1>
                <h3>Our career path helps motivated students become hireable frontend developers for 1% of the cost </h3>
                <button class="try-out">Try It Out Now!</button>
            </div>
            <img src={macbookGuy} alt=""/>
        </div>
    )
}

export default SiteHeader;