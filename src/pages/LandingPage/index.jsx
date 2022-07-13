import React from 'react'
import './LandingPage.scss'

import Header from '../../components/Header'
import HeaderMobile from '../../components/HeaderMobile'
import Intro from '../../components/Intro'
import BackgroundIntro from '../../components/BackgroundIntro'
import About from '../../components/About'
import Story from '../../components/Story'
import StoryBonus from '../../components/StoryBonus'
import Tokenomic from '../../components/Tokenomic'
import Roadmap from '../../components/Roadmap'
import Team from '../../components/Team'
import Partners from '../../components/Partners'
import Footer from '../../components/Footer'

export default function LandingPage() {


  return (
    <div>
        <HeaderMobile />
        <Header />
        <BackgroundIntro />
        <Intro />
        <About />
        <Story />
        <StoryBonus />
        <Tokenomic />
        <Roadmap />
        <Team />
        <Partners />
        <Footer />

        <div 
            className="scroll-to-top" 
            onClick={() => {window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })}}
        >
            <i className="fa-solid fa-arrow-up"></i>
        </div>
    </div>
  )
}
