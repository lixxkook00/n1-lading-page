import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <div className="footer">
        {/* container */}
        <div className="container">
            <div className="row">

                <div className="col-xl-5 col-12">
                    <div className="footer-img">
                        <img className="img-height body" src="./images/Artboard 702.png" alt="" />

                        <img className="img-height wing wing-left" src="./images/Artboard 302.png" alt="" />

                        <img className="img-height wing wing-right" src="./images/Artboard 102.png" alt="" />

                        <img className="img-height knife" src="./images/Artboard 502.png" alt="" />

                    </div>
                </div>

                <div className="col-xl-7 col-12 centering">
                    <div className="row">

                        <div className="col-xl-12 col-12">
                            <div className="footer-coming centering">
                                <div className="footer-logo">
                                    <img className="img-width" src="./images/LOGO FOOTER.png" alt="" />
                                </div>
                                <div className="footer-text">
                                    Coming Soon 
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-6">
                            <a href="" className="download">
                                <img className="img-width" src="./images/APP STORE.png" alt="" />
                            </a>
                        </div>

                         <div className="col-xl-6 col-6">
                            <a href="" className="download">
                                <img className="img-width" src="./images/GOOGLE PLAY.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* infor */}
        <div className="footer-infor">
            <div className="footer-infor-social">
                <div className="footer-infor-social-icon centering">
                    <a href="">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>

                <div className="footer-infor-social-icon centering">
                    <a href="">
                        <i className="fa-brands fa-discord"></i>
                    </a>
                </div>

                <div className="footer-infor-social-icon centering">
                    <a href="">
                        <i className="fa-brands fa-telegram"></i>
                    </a>
                </div>

                <div className="footer-infor-social-icon centering">
                    <a href="">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>

            <div className="footer-infor-text">
                © 2022 Tiger Cyber NFT
            </div>
        </div>
    </div>
  )
}
