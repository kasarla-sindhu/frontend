import React from 'react'
import './Footer.css'
import usaFlagLogo from '../../assests/usa-flag-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareInstagram,faLinkedin,faGooglePay,faPaypal,faAmazonPay,faApplePay} from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footer-con'>
        <div className='top'>
            <div className='sign-con'>
                <h1>BE THE FIRST TO KNOW</h1>
                <p>Sign up for updates from metta muse</p>
                <div className='signin'>
                    <input placeholder='Enter Your e-mail...'/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className='contact-details-con'>
                <h1 className='contact-head'>CONTACT US</h1>
                <p className='phone-num'>+442211335360</p>
                <p className='email'>customercare@mettamuse.com</p>
                <h1 className='currency'>CURRENCY</h1>
                <div className='currency-type'>
                    <img src={usaFlagLogo} alt="usa-flag-logo"/>
                    <h2>+ USD</h2>
                </div>
                <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
        </div>
        <hr className='lineis' />
        <div className='bottom'>
            <div className='b-1'>
                <h1>metta muse</h1>
                <p>About Us</p>
                <p>Stories</p>
                <p>Artisans</p>
                <p>Boutiques</p>
                <p>Contact Us</p>
                <p>EU Compliances Docs</p>
            </div>
            <div className='b-1'>
                <h1>QUICK LINKS</h1>
                <p>Orders & Shipping</p>
                <p>Join/Login as Seller</p>
                <p>Payment & Pricing</p>
                <p>Return & Refunds</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
                <p>Terms &  Conditions</p>
            </div>
            <div className='follow-con'>
                <h2>FOLLOW US </h2>
                <div className='social-links'>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faSquareInstagram} />
                </div>
                <div>
                    <p>metta muse ACCEPTS</p>
                    <div className='payment-links'>
                        <FontAwesomeIcon icon={faGooglePay} />
                        <FontAwesomeIcon icon={faPaypal} />
                        <FontAwesomeIcon icon={faAmazonPay} />
                        <FontAwesomeIcon icon={faApplePay} />
                    </div>
                </div>
            </div>
        </div>
        <p className='copyright'>Copyright <FontAwesomeIcon icon={faCopyright} /> 2023 mettamuse.All rights reserved.</p>
    </div>
  )
}

export default Footer