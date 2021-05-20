import React,{useState} from 'react'
import logo from './images/logo.svg'
import BurgureMenue from './BurgureMenue'
const Header = () => {
    return (
        <header className="myHeader">
            <div className="upper"></div>
            <div className="down">
                <div className="left">
                <BurgureMenue />
                    <ul className="leftul">
                    <li><a href="#">فروشگاه من</a></li>
                </ul>
                    </div>
                <div className="right"><ul className="rightul">
                    <li><a href="#"><img src={logo}/></a></li>
                    <li ><a href="#">درباره ما</a></li>
                    <li ><a href="#">کسب و کار</a></li>
                    <li ><a href="#">پشتیبانی</a></li>
                    <li ><a href="#">سوالات متداول</a></li>
                </ul>
                </div>
                </div>
        </header>
    )
}

export default Header;
