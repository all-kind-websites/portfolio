import { AnimatedRoutes, NavBar, Sidebar, SocialLinks } from './components';

import './index.css';


function App() {

  return (
    <div className='h-screen w-full bg-gradient-to-b from-black via-sky-800 to-gray-800 ' >
      <NavBar />
      <Sidebar />
      <AnimatedRoutes />
      <SocialLinks />
    </div>
  )
}

export default App;
