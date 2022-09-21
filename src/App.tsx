import React from 'react';
import { About, Experience, Home, NavBar, Portfolio, SocialLinks } from './components';
import './index.css';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <SocialLinks />
    </div>
  );
}

export default App;
