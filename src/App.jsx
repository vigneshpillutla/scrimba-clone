import React from 'react';
import Navbar from './Navbar';
import blob from './svgs/blobDiff.svg';
import macbookGuy from './svgs/macbook-guy.svg'
import wheelchair from './svgs/wheelchair.svg'
import beardedGuy from './svgs/bearded_man.svg'
import SiteHeader from './SiteHeader';
function App() {
  return (
    <div className="App">
      <Navbar />
      <SiteHeader/>
    </div>
  );
}

export default App;
