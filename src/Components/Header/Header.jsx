import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../Header/Header.scss';
import Logo from '../../assets/images/svg/logo.svg';
import Hamburger from '../../assets/images/svg/hamburger.svg';
import Account from '../../assets/images/svg/account.svg';
import Search from '../../assets/images/svg/search.svg';
import Cart from '../../assets/images/svg/cart.svg';

function Header(){
    return(
        <>
        <div className='nav'>
            <div className='nav__logo-cont'>
            <Link to='/'>
              <div className='nav__logo'>
                  <img src={Logo} alt='Logo' className='nav__logo-img'></img>
              </div> 
            </Link>
            </div>
              <div className='nav__menu'>
                <div className='nav__menu-hamburger'>
                    <img src={Hamburger} alt='Dropdown' ></img>
                </div>

            <div className='nav-cont'>
                <div className='nav__menu-icon-cont'>
                  <NavLink to='/account'>
                    <img src={Account} alt='Account' className='nav__menu-icon nav__menu-icon-account'></img>
                  </NavLink>
                  <NavLink to='/search'>
                    <img src={Search} alt='Search' className='nav__menu-icon nav__menu-icon-search'></img>
                  </NavLink>
                  <NavLink to='/cart'>
                    <img src={Cart} alt='Cart' className='nav__menu-icon nav__menu-icon-cart'></img>
                  </NavLink>
                </div>
              </div>
          </div>
        </div>
        </>
    )
}

export default Header;