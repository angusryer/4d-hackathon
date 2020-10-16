import React from 'react'
import SustainabilityLogo from '../../assets/images/svg/running-ss20-sustainability.svg';
import Logo from '../../assets/images/svg/Group-2.svg'
import './Journey.scss';


function Journey() {
    return (
        <section className="journey">
            <div className="journey__container">
                <img className="journey__waste-logo" src={SustainabilityLogo} alt="adidas sustainability logo"/>
                <img className="journey__adidas-logo" src={Logo} alt="adidas sustainability logo"/>
            </div>
            <div className="journey__header-container">
                <h1 className="journey__header">FOLLOW OUR JOURNEY TO END PLASTIC WASTE #INNOVATEWITHADIDAS</h1>
            </div>
        </section>
    )
}

export default Journey;
