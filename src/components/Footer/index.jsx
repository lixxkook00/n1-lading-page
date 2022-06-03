import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-12">
                    <div className="footer-img">
                        <img className="img-width" src="./images/footer-1.png" alt="" />
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
                            <img className="img-width" src="./images/APP STORE.png" alt="" />
                        </div>
                         <div className="col-xl-6 col-6">
                            <img className="img-width" src="./images/GOOGLE PLAY.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
