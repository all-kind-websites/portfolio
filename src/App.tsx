import { Routes, Route } from 'react-router-dom';

import { About, Contact, Techs, Home, NavBar, Portfolio, Sidebar, SocialLinks } from './components';
import './index.css';


function App() {
  return (
    <div>
      <NavBar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='techs' element={<Techs />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <SocialLinks />
    </div>
  )
}

export default App;
