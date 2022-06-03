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
                        Earth's background in 2163: natural disasters continuously occur, habitats are severely affected, life is threatened, a deadly atmosphere covers the whole planet, and the population decreases continuously, leading to the danger of extinction. 
                        </div>
                        <div className="paragraph">
                            On earth, the tiger is a species with the greatest strength, ability to hunt and fight, and is highly adaptable in the harsh jungle environment. Therefore, a special force was established with 1575 tiger warriors selected through many rigorous training, testing, and evaluation courses. They are sent to find and explore a new planet in order to assist in the evacuation of all creatures on Earth to this new location.
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
                                    // autoplay={{ delay: 3000 }}
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
