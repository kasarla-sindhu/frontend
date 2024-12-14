import './MainContainer.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const MainContainer = () => {
  return (
    <div className='maincontainer'>
        <div className='content'>
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>Lorem ipsum dolor sit amet consectetur.Amet est posuere rhoncus sceterisque.Dolor integer sceterisque nigh amet mi ut elementum dolor.</p>
        </div>
        <div className='details-con'>
            <hr className='line'/>
            <div className='c'>
                <div className='filter-con'>
                    <p>3425 Items</p>
                    <div className='filter-text'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <p>Hide Filter</p>
                    </div>
                </div>
                <div>
                    <div className='re-con'>
                        <p>RECOMMENDED</p>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </div>
            </div>
            <hr className='line'/>
        </div>
    </div>
  )
}

export default MainContainer