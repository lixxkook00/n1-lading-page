import React from 'react'
import './LoadingScreen.scss'

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
        <div className="loading-screen-wrap">
            <div class="glitch" data-text="TIGERCYBER">TIGERCYBER</div>
            <div class="glow">TIGERCYBER</div>
            <img src="./images/loading.gif" alt="" />
        </div>
    </div>
  )
}
