import React from 'react';
import Details from './pages/Details';
import Roadmap from './pages/Roadmap';
import Home from './pages/Home';
import * as s from './setup/styles/globalStyles';
import Instructions from './pages/Instructions';
import Particles from 'particles-bg'

function App() {

  return (
    <s.Page style={{ overflow: 'hidden' }}>
      <Home />
      <Roadmap />
      <Instructions />
      <Details />
      <Particles type="cobweb" color={'#ffffff'} bg={true} />
    </s.Page>
  );
}

export default App;
