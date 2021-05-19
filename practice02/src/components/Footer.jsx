import React from 'react'
import SquareCard from'./SquareCard';
import bread from './images/bread.png'
import restaurant from './images/restaurant.png'
import kharobar from './images/kharobar.png'
import hotel from './images/hotel.png'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="upfooter"><h3>بهترین همراهان ما</h3></div>
            <div className="downfooter">
                <SquareCard sqrImages={bread} sqrContent="نانوایی"/>
                <SquareCard sqrImages={restaurant} sqrContent="رستوران و کافه"/>
                <SquareCard sqrImages={hotel} sqrContent="هتل"/>
                <SquareCard sqrImages={kharobar} sqrContent="سوپر مارکت"/>

                </div>
        </footer>
    )
}

export default Footer
