import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

import { About, Contact, Techs, Home, Projects, EnToutoNika, PageNotFound, TechCmp, } from '../pages';


const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname} >
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />

        <Route path='projects' element={<Projects />} />
        <Route path='projects/entoutonika' element={<EnToutoNika />} />

        <Route path='techs' element={<Techs />} />
        <Route path='techs/:id' element={<TechCmp />} />

        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes