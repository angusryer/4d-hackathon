import React from 'react';
import ShopImage from '../../assets/images/svg/Group-27.svg';
import WomenButton from '../../assets/images/svg/women-button.svg'
import MenButton from '../../assets/images/svg/men-button.svg'
import './ShopHighPerformance.scss';


function ShopHighPerformance() {
    return (
        <section className="shop">
            <span className="shop__top-border"></span>
            <h1 className="shop__header">Shop high-performance recycled materials</h1>
            <div className="shop__image-container">
                <img className="shop__image" src={ShopImage} alt="adidas superstar shoe"/>
                <div className="shop__button-container">
                    <img className="shop__women-button" src={WomenButton} alt="adidas superstar shoe"/>
                    <img className="shop__men-button" src={MenButton} alt="adidas superstar shoe"/>
                </div>
            </div>
        </section>
    )
}

export default ShopHighPerformance;

