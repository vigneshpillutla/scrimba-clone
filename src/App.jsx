import React from 'react';
import Navbar from './Navbar';
import About from './About';
import SiteHeader from './SiteHeader';
import CourseBanner from './CourseBanner';
import DiscordJoin from './DiscordJoin'
import MoreAbout from './MoreAbout'
import Footer from './Footer'
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
      <DiscordJoin/>
      <MoreAbout/>
      <Footer/>
    </div>
  );
}

export default App;
