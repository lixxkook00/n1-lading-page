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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="roadmap-end">
            <img className="img-width" src="./images/ROADMAP.png" alt="" />
        </div>
    </div>
  )
}