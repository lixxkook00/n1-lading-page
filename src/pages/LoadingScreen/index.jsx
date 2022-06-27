import React from 'react'
import './LoadingScreen.scss'

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
        <div className="loading-screen-wrap">
            <div className="glitch" data-text="CYBERTIGER">CYBERTIGER</div>
            <div className="glow">CYBERTIGER</div>
            <img src="./images/loading.gif" alt="" />
        </div>
    </div>
  )
}
