import React from 'react'


// MUI
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import {Link} from 'react-router-dom'

export default function HeaderMobile() {

    const [stateNav, setStateNav] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    }); 

    const modalCartNav = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawerNav(anchor, false)}
          onKeyDown={toggleDrawerNav(anchor, false)}
        >
            <div>
                <div className="cart-title">
                    <div className=" nav-logo">
                       <img src="/images/logo.png" alt="" />
                    </div>
                    <div className="cart-title-close">
                        <div className="clear-btn">
                            <i className="fa-solid fa-circle-xmark"></i>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="tempty-title" >
                <a href="/" className="nav-item">
                    <div className="nav-item-name active" >
                        Home
                    </div>
                </a>
            </div>

            <div className="tempty-title" >
                <Link to="/galerry" className="nav-item">
                    <div className="nav-item-name" >
                        Galerry
                    </div>
                </Link>
            </div>

            <div className="tempty-title" >
                <a href="https://spin.cybertigers.io/" className="nav-item">
                    <div className="nav-item-name" >
                        Lucky Wheel
                    </div>
                </a>
            </div>

             <div className="tempty-title" >
                <a href="https://whitepaper.cybertigers.io/" className="nav-item">
                    <div className="nav-item-name" >
                        Whitepaper
                    </div>
                </a>
            </div>

            <div className="tempty-title">
                <a href="https://marketplace.cybertigers.io/" className="nav-item">
                    <div className="nav-item-name nav-item-name--primary">
                        Shop
                    </div>
                </a>
            </div>

            <div className="tempty-title">
                <a href="https://female.cybertigers.io/" className="nav-item">
                    <div className="nav-item-name nav-item-name--primary">
                        Female Tiger
                    </div>
                </a>
            </div>

            <div className="tempty-title">
                <a href="/" className="nav-item">
                    <div className="nav-item-name nav-item-name--primary">
                        Wallet Connect
                    </div>
                </a>
            </div>
        </Box>
    );

    const toggleDrawerNav = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setStateNav({ ...stateNav, [anchor]: open });
    };
  return (
    <>
        
        {/* Modal Nav Mobile Menu*/}
        <div className="header-mobile-wrap hide-on-pc">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="header-mobile">
                            <div className="header-mobile-logo">
                                <img className="img-height" src="/images/logo.png" alt="" />
                            </div>

                            <div className="header-mobile-icon">
                                <i className="fa-solid fa-bars" onClick={toggleDrawerNav('left', true)}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Drawer
            anchor={'left'}
            open={stateNav['left']}
            onClose={toggleDrawerNav('left', false)}
        >
            {modalCartNav('left')}
        </Drawer>
    </>
  )
}
