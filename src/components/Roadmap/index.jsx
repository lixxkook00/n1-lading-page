import React from 'react'
import './Roadmap.scss'

export default function Roadmap() {
  return (
    <div className="roadmap">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="title centering-left">
                        <div className="primary-title primary-gradient-text">
                            Roadmap
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="row roadmap-content">
                        {/* STAGE 01 */}
                        <div className="col-xl-4">
                            <div className="roadmap-section roadmap-section--1">
                                <div className="roadmap-title">
                                    Stage 01
                                </div>
                                <div className="roadmap-name">
                                    Start
                                </div>
                                <div className="roadmap-ul">
                                    <div className="roadmap-li">
                                        <div className="roadmap-li-doc"></div> Create NFT genesis and mint on NFT binance smart chain marketplace.
                                    </div>
                                    <div className="roadmap-li">
                                        <div className="roadmap-li-doc"></div>Stack NFT.
                                    </div>
                                </div>

                                <div className="roadmap-icon-mobile hide-on-pc">
                                    <img className="img-height roadmap-icon-mobile-img roadmap-icon-mobile-img--1" src="./images/moibile.png" alt="" />
                                    <img className="img-height roadmap-icon-mobile-img roadmap-icon-mobile-img--2" src="./images/moibile 2.png" alt="" />
                                </div>
                            </div>
                        </div>

                        {/* STAGE 02 */}
                        <div className="col-xl-4">
                            <div className="roadmap-section roadmap-section--2">
                                <div className="roadmap-title">
                                    Stage 02
                                </div>
                                <div className="roadmap-name">
                                    Release of  NFT Baby
                                </div>
                                <div className="roadmap-ul">
                                    <div className="roadmap-li">
                                        <div className="roadmap-li-doc"></div>Mint NFT Baby on binance Smart Chain
                                    </div>
                                    <div className="roadmap-li">
                                        <div className="roadmap-li-doc"></div>NFT Baby is created from the breeding (breed) between 2 NFT Genesis
                                    </div>
                                    <div className="roadmap-li">
                                        <div className="roadmap-li-doc"></div>The breeding limit in NFT Genesis is 18 times.
                                    </div>
                                    <div className="roadmap-li">
                                        <div className="roadmap-li-doc"></div>Open Marketplace
                                    </div>
                                </div>

                                <div className="roadmap-icon-mobile hide-on-pc">
                                    <img className="img-height roadmap-icon-mobile-img roadmap-icon-mobile-img--1" src="./images/moibile.png" alt="" />
                                    <img className="img-height roadmap-icon-mobile-img roadmap-icon-mobile-img--2" src="./images/moibile 2.png" alt="" />
                                </div>
                            </div>
                        </div>

                        {/* STAGE 03 */}
                        <div className="col-xl-4">
                            <div className="roadmap-section roadmap-section--3">
                                <div className="roadmap-title">
                                    Stage 03
                                </div>
                                <div className="roadmap-name">
                                    Gambling
                                </div>
                                <div className="roadmap-ul">
                                    <div className="roadmap-li">
                                        <div className="roadmap-li-doc"></div>Build a Gambling Platform has special offers if you own NFT Genesis + Baby.
                                    </div>
                                    <div className="roadmap-li">
                                        <div className="roadmap-li-doc"></div>Create an ecosystem for NFT
                                    </div>
                                </div>

                                <div className="roadmap-icon-mobile hide-on-pc">
                                    <img className="img-height roadmap-icon-mobile-img roadmap-icon-mobile-img--1" src="./images/moibile.png" alt="" />
                                    <img className="img-height roadmap-icon-mobile-img roadmap-icon-mobile-img--2" src="./images/moibile 2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="roadmap-end">
            <img className="img-width" src="./images/ROADMAP.png" alt="" />

            <img src="./images/road-map-1.png" alt="" className="roadmap-end-child roadmap-end-child--1 img-width circle" />

            <img src="./images/road-map-2.png" alt="" className="roadmap-end-child roadmap-end-child--2 img-width rectangle" />
        
            <img src="./images/road-map-1.png" alt="" className="roadmap-end-child roadmap-end-child--3 img-width circle" />

            <img src="./images/road-map-2.png" alt="" className="roadmap-end-child roadmap-end-child--4 img-width rectangle" />

            <img src="./images/road-map-1.png" alt="" className="roadmap-end-child roadmap-end-child--5 img-width circle" />

            <img src="./images/road-map-2.png" alt="" className="roadmap-end-child roadmap-end-child--6 img-width rectangle" />
        </div>
    </div>
  )
}
