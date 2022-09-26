import { Routes, Route } from 'react-router-dom';

import { NavBar, Sidebar, SocialLinks } from './components';
import { About, Contact, Techs, Home, Portfolio, Html, } from './pages';
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
        <Route path='techs/html' element={<Html />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <SocialLinks />
    </div>
  )
}

export default App;
