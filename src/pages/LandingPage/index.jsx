import React , {useState} from 'react'
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

  const ref = ('0x273c0496D6Eb47dCa4a676CEBc021BC5F3B029a9')
  const ref2 = ('0x8C63f72Ee418e612ceCF21cE266516423B4c80E7')

  const [iconCopy,setIconCopy] = useState("fa-solid fa-copy")
  const [iconCopy2,setIconCopy2] = useState("fa-solid fa-copy")

  const handleCopyClipboard = (index) => {
    if(index===1){
      setIconCopy("fa-solid fa-circle-check icon-active")

      setTimeout(() => {
          setIconCopy("fa-solid fa-copy")
      },3000)

      navigator?.clipboard?.writeText(ref)
      window?.clipboardData?.setData("ref1", {ref})
    }else if(index===2){
      setIconCopy2("fa-solid fa-circle-check icon-active")

      setTimeout(() => {
          setIconCopy2("fa-solid fa-copy")
      },3000)

      navigator?.clipboard?.writeText(ref2)
      window?.clipboardData?.setData("ref2", {ref2})
    }
  }

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

        {/* REF */}
        <div className="token-contract">
          <div className="token-contract-item">
            Meat Token :
            <div>
                <p>{ref}</p>
                <i className={iconCopy} onClick={() => handleCopyClipboard(1)}></i>
            </div>
          </div>

          <div className="token-contract-item">
            Cybertigers NFT :
            <div>
                <p>{ref2}</p>
                <i className={iconCopy2} onClick={() => handleCopyClipboard(2)}></i>
            </div>
          </div>
        </div>
    </div>
  )
}
