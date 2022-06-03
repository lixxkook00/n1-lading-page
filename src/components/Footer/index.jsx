import React,{useEffect} from 'react'
import './Footer.scss'

export default function Footer() {

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const square = entry.target.querySelector('.fire');
    
                if (entry.isIntersecting) {
                square.classList.add('show');
                return; // if we added the class, exit the function
                }
    
                // We're not intersecting, so remove the class!
                square.classList.remove('show');
            });
        });
    
        observer.observe(document.querySelector('.wrapper'));
    },[])

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

                            <div className="wrapper fire-wrapper--left">
                                <div className="fire">
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                </div>
                            </div>
                            <div className="wrapper fire-wrapper--right">
                                <div className="fire show">
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                </div>
                            </div>
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
