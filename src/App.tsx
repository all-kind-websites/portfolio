import React from 'react';
import { About, Home, NavBar, SocialLinks } from './components';
import './index.css';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <SocialLinks />
    </div>
  );
}

export default App;
