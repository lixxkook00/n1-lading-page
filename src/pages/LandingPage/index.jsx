import React from 'react'
import './LandingPage.scss'

import Header from '../../components/Header'
import Intro from '../../components/Intro'
import BackgroundIntro from '../../components/BackgroundIntro'

export default function LandingPage() {
  return (
    <div>
        <Header />
        <BackgroundIntro />
        <Intro />
    </div>
  )
}
