import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../Header/Header.scss';

function Header(){
    return(
        <>
        <div className='nav'>
          <div className='nav-cont'>
            <Link to='/'>
              <div className='nav__logo'>
                  <p>LOGO</p>
              </div> 
            </Link>
              <div className='nav__menu'>
                <NavLink to='/page1'>
                  <p className='nav__menu-button'>page1</p>
                </NavLink>
                <NavLink to='/page2'>
                  <p className='nav__menu-button'>page2</p>
                </NavLink>
                <NavLink to='/page2'>
                  <p className='nav__menu-button'>account</p>
                </NavLink>
              </div>
          </div>
        </div>
        </>
    )
}

export default Header;