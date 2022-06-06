import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation,Autoplay } from "swiper";

import './About.scss'

export default function About() {
    const swiperAbout = useRef(null);

  return (
    <div className="about">
        <div className="about-title centering">
            <div className="primary-title primary-gradient-text">
                About Project
            </div>
        </div>
        <div className="about-slider centering">
            <div className="slider-control">
                <div className="slider-control-item centering" onClick={() => {swiperAbout.current.swiper.slidePrev()}}>
                    <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className="slider-control-item centering" onClick={() => {swiperAbout.current.swiper.slideNext()}}>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
            </div>
            <Swiper
                modules={[Pagination, Navigation,Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                // loopFillGroupWithBlank={true}
                // autoplay={{ delay: 3000 }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    1000: {
                        slidesPerView: 3,
                    },
                }}
                navigation={true}
                className="mySwiper"
                ref={swiperAbout}
            >
                <SwiperSlide>
                    <div className="about-card">
                        <div className="about-card-bg">
                            <img src="./images/Group 124.png" alt="" />
                        </div>
                        <div className="about-card-content">
                            <div className="about-card-content-planet centering">
                                <img className='img-height why' src="./images/WHY.png" alt="" />
                            </div>
                            <div className="about-card-content-name">
                                Why
                            </div>
                            <div className="about-card-content-decs">
                                NFTs, with their special applications, are the trend of the future. However, the application of NFTs in practice is facing many problems in some projects. Cybertiger has been formed with the desire to be a multi-app, story-intensive NFT ecosystem. 
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="about-card">
                        <div className="about-card-bg">
                            <img src="./images/Group 124.png" alt="" />
                        </div>
                        <div className="about-card-content">
                            <div className="about-card-content-planet centering">
                                <img className='img-height vision' src="./images/VISION.png" alt="" />
                            </div>
                            <img src="./images/Vector.png" alt="" className="vector img-width" />
                            <div className="about-card-content-name">
                                Vision
                            </div>
                            <div className="about-card-content-decs">
                               With a long-term vision is to build a metaverse, where the NFTs will be used as residents of that metaverse. In the short term, the project will focus on bringing NFT applications onto various platforms of the CyberTiger ecosystem.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="about-card">
                        <div className="about-card-bg">
                            <img src="./images/Group 124.png" alt="" />
                        </div>
                        <div className="about-card-content">
                            <div className="about-card-content-planet centering">
                                <img className='img-height mission' src="./images/MISSION.png" alt="" />
                            </div>
                            <div className="about-card-content-name">
                                Mission
                            </div>
                            <div className="about-card-content-decs">
                                We want to create a valuable ecosystem of NFTs. There is a large community to grow together, sharing those values ​​together. With each NFT, there will be a ticket for collectors to enter the Cybertiger universe.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="about-card">
                        <div className="about-card-bg">
                            <img src="./images/Group 124.png" alt="" />
                        </div>
                        <div className="about-card-content">
                            <div className="about-card-content-planet centering">
                                <img className='img-height ourteam' src="./images/OUR TEAM.png" alt="" />
                            </div>
                            <div className="about-card-content-name">
                                Our Team
                            </div>
                            <div className="about-card-content-decs">
                                Our team is a collection of blockchain engineers and artists with a passion and a desire to do something great. We decided to dedicate everything we had to being able to develop this Cybertiger project.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}
