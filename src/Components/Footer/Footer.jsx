import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../Footer/Footer.scss';
import Flag from '../../assets/images/svg/flag.svg'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer__container">
                    <NavLink to='#'>
                        <p className="footer__imprint footer__text-top">Imprint</p>  
                    </NavLink>
                    <NavLink to='#'>
                        <p className="footer__cookies footer__text-top">Cookies</p>
                    </NavLink>   
                    <NavLink to='#'>                 
                        <p className="footer__site-map footer__text-top">Site Map</p>
                    </NavLink>
                    <NavLink to='#'>
                        <p className="footer__privacy-policy footer__text-top">Privacy Policy</p>
                    </NavLink>    
                    <NavLink to='#'>
                        <p className="footer__terms-and-conditions footer__text-top">Terms and Conditions</p>
                    </NavLink>
                    <div className="footer__flag-country-container">
                         
                            <img src={Flag} alt='Canada' className='footer__icon footer__icon-flag footer__flag'></img>

                        <p className="footer__country footer__text-bottom">Canada</p>
                    </div>
                    <p className="footer__adidas-canada-limited footer__text-bottom">2020 adidas Canada Limited</p>
                </div>
            </div>
        </>
    )
}

export default Footer;