import React from 'react'

import { Route,Routes} from 'react-router-dom';


import LandingPage from '../pages/LandingPage'
import Galerry from '../pages/Galerry';

export default function Router({setPathname}) {
  return (
    <Routes>
        <Route exact path="/" element={<LandingPage />} />

        <Route exact path="/galerry" element={<Galerry />} />
    </Routes>
  )
}
