import React , {useState} from 'react'
import './ShopPage.scss'

export default function ShopPage() {

    const [currentTag,setCurrentTag] = useState("avatar")

    return (
        <div className="shop container">
            <div className="shop-control row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                    <div onClick={() => setCurrentTag("avatar")} className={`userinfor-item ${currentTag === "avatar" ? "active" : ""}`}>
                        NORMAL
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                    <div onClick={() => setCurrentTag("ticket")} className={`userinfor-item ${currentTag === "ticket" ? "active" : ""}`}>
                        RARE
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                    <div onClick={() => setCurrentTag("character")} className={`userinfor-item ${currentTag === "character" ? "active" : ""}`}>
                        SUPER RARE 
                    </div>
                </div>
            </div>

            {
                currentTag === "avatar"
                &&
                <div className="shop-list row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/N0001.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/N0002.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/N0003.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/N0004.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/N0005.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/N0006.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/N0007.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/N0008.jpg" alt="" />
                        </div>
                    </div>
                </div>
            }
    
            {
                currentTag === "ticket"
                &&
                <div className="shop-list row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/R001.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/R002.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/R003.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/R004.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/R005.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/R006.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/R007.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/R008.jpg" alt="" />
                        </div>
                    </div>
                </div>
            }

            {
                currentTag === "character"
                &&
                <div className="shop-list row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/SPR01.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/SPR02.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/SPR03.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/SPR04.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/SPR05.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/SPR06.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/SPR07.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                        <div className="shop-item">
                            <img src="./images/SPR08.jpg" alt="" />
                        </div>
                    </div>
                </div>
            }

            

        </div>
    )
}
