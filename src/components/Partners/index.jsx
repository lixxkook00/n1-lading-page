import React from 'react'
import './Partners.scss'

export default function Partners() {
  return (
    <div className="partner">
        <div className="container">
            <div className="row">
                {/* TITLE */}
                <div className="col-xl-5 centering">
                    <div className="title">
                        <div className="primary-title primary-gradient-text">
                            Partners
                            <span>&</span>
                            Investors
                        </div>
                    </div>
                </div>

                {/* LOGO LIST */}
                <div className="col-xl-7">
                    <div className="row">
                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src="./images/COINGECKO.png" alt="" className="img-width" />
                            </div>
                        </div>

                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src="./images/POOCOIN.png" alt="" className="img-width" />
                            </div>
                        </div>

                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src="./images/DEXTOOLS.png" alt="" className="img-width" />
                            </div>
                        </div>

                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src="./images/BSCSCAN.png" alt="" className="img-width" />
                            </div>
                        </div>

                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src="./images/PINKSALE.png" alt="" className="img-width" />
                            </div>
                        </div>

                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src="./images/PANCAKE.png" alt="" className="img-width" />
                            </div>
                        </div>

                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src="./images/BINANCE.png" alt="" className="img-width" />
                            </div>
                        </div>

                        <div className="col-xl-4 col-6">
                            <div className="partner-logo gradient-box-no-ani">
                                <img src="./images/COINMARKET.png" alt="" className="img-width" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
