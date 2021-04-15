import React from 'react';
import Navbar from './Navbar';
import About from './About';
import SiteHeader from './SiteHeader';
import CourseBanner from './CourseBanner';
import courseBannerData from './CourseBannerData.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <SiteHeader/>
      <About/>
      {courseBannerData.map(data=>
        <CourseBanner {...data} />
      )}
    </div>
  );
}

export default App;
