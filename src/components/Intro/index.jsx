import React from 'react'
import './Intro.scss'

export default function Intro() {
  return (
    <div className="intro">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    <div className="intro-content">
                        <div className="intro-content-title primary-gradient-text">
                            Cyber Tiger
                        </div>
                        <a href="https://marketplace.cybertigers.io/" className="intro-content-button">
                            Go to Marketplace <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 centering">
                    <div className="intro-logo centering">
                        <img className="img-height" src="./images/LOGO HEADER.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        

    </div>
  )
}
