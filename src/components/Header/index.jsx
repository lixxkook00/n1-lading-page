import React, {useEffect, useState} from 'react'
import { useAccountContext } from '../../context/accountContext'

import './Header.scss'

export default function Header() {
    const {account} = useAccountContext();
    let shortAccount = null
    if(account) {
        shortAccount = account.slice(0,6) + "..." + account.slice(-4)
    }

  return (
    <div className="header centering hidden-m-t hidden-low-pc">
        <div className="container">
            <div className="row header-wrapper">
                <div className="col-xl-2">
                    <a href="/" className="header-logo">
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
                        <a href="https://n1-marketplace.vercel.app/marketplace" className="header-nav-item">
                            Shop
                        </a>
                        {/* <a href="https://n1-marketplace.vercel.app/" className="header-nav-item">
                            Marketplace
                        </a> */}
                    </div>
                </div>
                <div className="col-xl-2">
                    {
                        account? ((<div className="header-wallet gradient-box">
                            <a href="https://n1-marketplace.vercel.app">{shortAccount}</a>
                        
                    </div>)) :
                        (<div className="header-wallet gradient-box">
                        Connect Wallet
                    </div>)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
