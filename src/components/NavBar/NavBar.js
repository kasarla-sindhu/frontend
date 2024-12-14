import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import loremIcon from '../../assests/lorem-icon.png'
import logoIcon from '../../assests/logo-img.png'

const NavBar = () => {
  return (
    <div className='nav-con'>
        <div className='lorem-con'>
            <div className='lorem'>
                <img src={loremIcon} className='l-icon'/>
                <p>Lorem ipsum dolor</p>
            </div>
            <div className='lorem'>
                <img src={loremIcon} className='l-icon'/>
                <p>Lorem ipsum dolor</p>
            </div>
            <div className='lorem'>
                <img src={loremIcon} className='l-icon'/>
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
        <nav className='nav'>
            <div className='logo-con'>
                <img alt="logo" src={logoIcon} className='logo-img' />
                <h1>Logo</h1>
                <div className='nav-elements'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='icons' />
                    <FontAwesomeIcon icon={faHeart} className='icons' />
                    <FontAwesomeIcon icon={faSuitcaseRolling} className='icons' />
                    <FontAwesomeIcon icon={faUser} className='icons' />
                    <select className='icons'>
                        <option>Eng</option>
                        <option>Tel</option>
                    </select>
                </div>
            </div>
            <ul className='elements'>
                <li>SHOP</li>
                <li>SKILLS</li>
                <li>STORIES</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            </ul>
            <hr className='line'/>
        </nav>
        
    </div>
  );
};

export default NavBar;
 