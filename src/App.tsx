import { Routes, Route } from 'react-router-dom';

import { NavBar, Sidebar, SocialLinks } from './components';
import { About, Contact, Techs, Home, Projects, Html, CSS, EnToutoNika, } from './pages';
import './index.css';


function App() {
  return (
    <div>
      <NavBar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />

        <Route path='projects' element={<Projects />} />
        <Route path='projects/entoutonika' element={<EnToutoNika />} />

        <Route path='techs' element={<Techs />} />
        <Route path='techs/html' element={<Html />} />
        <Route path='techs/css' element={<CSS />} />

        <Route path='contact' element={<Contact />} />
      </Routes>
      <SocialLinks />
    </div>
  )
}

export default App;
