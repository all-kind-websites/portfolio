import React from 'react';
import { About, Home, NavBar, Portfolio, SocialLinks } from './components';
import './index.css';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <SocialLinks />
    </div>
  );
}

export default App;
