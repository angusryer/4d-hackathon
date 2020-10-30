import React from 'react';
import '../Hero/Hero.scss';
import Banner from '../../assets/images/svg/hero.svg';
import ShopNow from '../../assets/images/svg/shopButton.svg';

function Hero(){
  return(
      <>
      <div className='hero'>
          <div className='hero-cont'>
              
              <div className='hero-label'>
                <p className='hero-label-text hero-label-text-adidas'>adidas</p>
                <p className='hero-label-text hero-label-text2'>2.0</p>
              </div>

              <div>
                  <p className='hero-title'>Giving apparel and sporting goods a second life with adidas 2.0</p>
                  <img src={ShopNow} alt='Shop Now' className='hero-button'></img>
              </div>
          </div>
          <div>
              <div className='hero-wrap'>
                <div className='hero-background'>
                  <p className='hero-wrap-text hero-wrap-text__1'>PLASTIC WASTE IS A PROBLEM.</p>
                  <p className='hero-wrap-text hero-wrap-text__2'>INNOVATION IS OUR SOLUTION.</p>
                </div>
              </div>
          </div>
      </div>
      </>
  )
}

export default Hero;