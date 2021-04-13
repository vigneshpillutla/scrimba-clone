import React from 'react';
import Navbar from './Navbar';
import blob from './svgs/blobDiff.svg';
import SiteHeader from './SiteHeader';
function App() {
  return (
    <div className="App">
      <Navbar />
      <SiteHeader/>
      <div className="blob">
      <img src={blob} alt=""/>
      </div>
    </div>
  );
}

export default App;
