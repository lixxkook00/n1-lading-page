import React,{useState} from 'react'
import './Tokenomic.scss'

import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

import CircleChart from '../CircleChart'

export default function Tokenomic() {
    
    return (
        <div className="tokenomic">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="about-title centering">
                            <div className="primary-title primary-gradient-text">
                                Tokenomic
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="tokenomic-chart">
                            <div className="free-chartjs"></div>
                            <CircleChart />
                        </div>
                    </div>

                    <div className="col-xl-6 centering">
                        <div className="row centering">

                            <div className="col-xl-3 col-3">
                                <div className="tokenomic-percent">
                                    <div className="tokenomic-percent-num dev">
                                        <CountUp end={15} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>%
                                    </div>
                                    <div className="tokenomic-percent-name">
                                        Team Dev
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-3">
                                <div className="tokenomic-percent">
                                    <div className="tokenomic-percent-num adv">
                                        <CountUp end={5} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>%
                                    </div>
                                    <div className="tokenomic-percent-name">
                                        Advisor
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-3">
                                <div className="tokenomic-percent">
                                    <div className="tokenomic-percent-num mar">
                                        <CountUp end={5} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>%
                                    </div>
                                    <div className="tokenomic-percent-name">
                                        Marketing, bounty, community, airdrop
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-3">
                                <div className="tokenomic-percent">
                                    <div className="tokenomic-percent-num liqui">
                                        <CountUp end={10} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>%
                                    </div>
                                    <div className="tokenomic-percent-name">
                                        Liquidity
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-3">
                                <div className="tokenomic-percent">
                                    <div className="tokenomic-percent-num hybri">
                                        <CountUp end={10} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>%
                                    </div>
                                    <div className="tokenomic-percent-name">
                                        Hybridization
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-3">
                                <div className="tokenomic-percent">
                                    <div className="tokenomic-percent-num reward">
                                        <CountUp end={35} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>%
                                    </div>
                                    <div className="tokenomic-percent-name">
                                       Reward, staking, LP
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-3">
                                <div className="tokenomic-percent">
                                    <div className="tokenomic-percent-num network">
                                        <CountUp end={10} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>%
                                    </div>
                                    <div className="tokenomic-percent-name">
                                       Network 
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-3">
                                <div className="tokenomic-percent">
                                    <div className="tokenomic-percent-num burn">
                                        <CountUp end={10} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>%
                                    </div>
                                    <div className="tokenomic-percent-name">
                                       Reserved (burn) 
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
