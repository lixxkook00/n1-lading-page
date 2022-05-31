import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <div className="header">
        <div className="container">
            <div className="row header-wrapper">
                <div className="col-xl-2">
                    <a href="https://www.google.com/" className="header-logo">
                        <img src="./images/logo.png" alt="" />
                    </a>
                </div>
                <div className="col-xl-8">
                    <div className="header-nav">
                        <div className="header-nav-item">
                            Home
                        </div>
                        <div className="header-nav-item">
                            Galerry
                        </div>
                        <div className="header-nav-item">
                            Whitepaper
                        </div>
                        <div className="header-nav-item">
                            Shop
                        </div>
                    </div>
                </div>
                <div className="col-xl-2">
                    <div className="header-wallet gradient-box">
                        Connect Wallet
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
