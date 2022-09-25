import { Routes, Route } from 'react-router-dom';

import { About, Contact, Experience, Home, NavBar, Portfolio, SocialLinks } from './components';
import './index.css';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='experience' element={<Experience />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <SocialLinks />
    </div>
  )
}

export default App;
