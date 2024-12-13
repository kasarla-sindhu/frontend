import React from 'react'

const NavBar = () => {
  return (
    <div className='nav-con'>
        <div className='lorem-con'>
            <div className='lorem'>
                <p>Lorem ipsum dolor</p>
            </div>
            <div className='lorem'>
                <p>Lorem ipsum dolor</p>
            </div>
            <div className='lorem'>
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
        <nav className='nav'>
            <div className='logo-con'>
                <img/>
                <h1>Logo</h1>
                <div className='nav-elements'>
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                    <select>
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
        </nav>
        <hr/>
    </div>
  )
}

export default NavBar