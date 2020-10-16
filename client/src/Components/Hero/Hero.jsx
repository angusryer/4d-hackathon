import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../Hero/Hero.scss';
import Banner from '../../assets/images/svg/hero.svg';
import Blackdrop from '../../assets/images/svg/black-full.svg';
import ShopNow from '../../assets/images/svg/blackRect.svg';


function Hero(){
    return(
        <>
        <div className='hero'>
            <div className='hero-cont'>
                <img src={Banner} alt='Hero' className='hero-img'></img>
                <p className='hero-title'>Giving apparel and sporting goods a second life with adidas 2.0</p>
                <img src={ShopNow} alt='Shop Now' className='hero-button'></img>
            </div>
            <div>
                <img src={Blackdrop} alt='Text Background' className='hero-text-background'></img>
                <div className='hero-wrap'>
                    <p className='hero-wrap-text hero-wrap-text__1'>PLASTIC WASTE IS A PROBLEM.</p>
                    <p className='hero-wrap-text hero-wrap-text__2'>INNOVATION IS OUR SOLUTION.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;