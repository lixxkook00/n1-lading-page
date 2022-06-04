import React,{useRef} from 'react'
import './StoryBonus.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation,Autoplay } from "swiper";

export default function StoryBonus() {
    const swiperStoryBonus = useRef(null);

  return (
    <div className="story-bonus">
        <div className="container">
            <div className="row">
                {/* PARAGRAPH */}
                <div className="col-xl-6 centering">
                    <div>
                        <div className="paragraph">
                            The mission of this special force during this time period is to explore the outpost, fight alien forces, and build a base on the planet Kepler 452b.
                        </div>
                        <div className="paragraph">
                            From there, evacuate all inhabitants of the world to this planet. This special force is divided into 75 teams. Each team consists of 21 warriors, led by a Super Rare CyberTiger tiger warrior, along with 6 or 7 rare CyberTiger members and 12 to 14 normal CyberTigers.
                        </div>
                        
                    </div>
                </div>

                {/* ROBOT SLIDER */}
                <div className="col-xl-6">
                    <div className="story-bonus-slider centering">
                        <div className="card-robot">
                            <div className="card-robot-bg centering">
                                <img className="img-width" src="./images/Artboard 9 1.png" alt="" />
                                <img src="./images/Group 311.png" alt="" className="standing" />
                                <div className="standing-glow">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className="card-robot-content">
                            <div className="card-robot-content-wrapper centering">
                                <div className="slider-control">

                                    <div className="slider-control-item centering" onClick={() => {swiperStoryBonus.current.swiper.slidePrev()}}>
                                        <i className="fa-solid fa-angle-left"></i>
                                    </div>

                                    <div className="slider-control-item centering" onClick={() => {swiperStoryBonus.current.swiper.slideNext()}}>
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
                                    autoplay={{ delay: 3000 }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    className="mySwiper"
                                    ref={swiperStoryBonus}
                                >
                                    <SwiperSlide>
                                        <img className='img-width' src="./images/R174.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='img-width' src="./images/R015.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='img-width' src="./images/R229.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='img-width' src="./images/R336.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='img-width' src="./images/R391.png" alt="" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='img-width' src="./images/R448.png" alt="" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
