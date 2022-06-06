import React from 'react'
import './Team.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation,Autoplay } from "swiper";

export default function Team() {
  return (
    <div className="team">
       <div className="container">
           <div className="row">
               {/* TITLE */}
               <div className="col-xl-12">
                    <div className="title centering">
                        <div className="primary-title primary-gradient-text">
                            Team
                        </div>
                    </div>
               </div>

               {/* SLIDER */}
               <div className="col-xl-12">
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
                    >
                        <SwiperSlide>
                            <div className="team-wrap">
                                <div className="team-card gradient-box-no-ani">
                                    <div className="team-card-avt">
                                        <img className="img-width" src="./images/CEO.png" alt="" />
                                    </div>
                                    <div className="team-card-name">
                                        Xavia
                                    </div>
                                    <div className="team-card-job">
                                        CEO
                                    </div>
                                    <div className="team-card-desc">
                                        Branding specialist. Passionate in creating brands, building teams, creating value-driven projects.
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="team-wrap">
                                <div className="team-card gradient-box-no-ani">
                                    <div className="team-card-avt">
                                        <img className="img-width" src="./images/CMO.png" alt="" />
                                    </div>
                                    <div className="team-card-name">
                                        Meliora
                                    </div>
                                    <div className="team-card-job">
                                        CMO
                                    </div>
                                    <div className="team-card-desc">
                                        Expert in marketing and digital strategies for 3 years. Passionate in stocks and crypto growing up.
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="team-wrap">
                                <div className="team-card gradient-box-no-ani">
                                    <div className="team-card-avt">
                                        <img className="img-width" src="./images/CREATIVE DIRECTOR.png" alt="" />
                                    </div>
                                    <div className="team-card-name">
                                        Phoebe
                                    </div>
                                    <div className="team-card-job">
                                        Creative Director
                                    </div>
                                    <div className="team-card-desc">
                                        More than 2 years experience in trading crypto, stocks and community building.   
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="team-wrap">    
                                <div className="team-card gradient-box-no-ani">
                                    <div className="team-card-avt">
                                        <img className="img-width" src="./images/CFO.png" alt="" />
                                    </div>
                                    <div className="team-card-name">
                                        Martha
                                    </div>
                                    <div className="team-card-job">
                                        CFO
                                    </div>
                                    <div className="team-card-desc">
                                        4 years journey in system development. All started with a passion to create the difference.
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
               </div>
           </div>
       </div>
    </div>
  )
}
