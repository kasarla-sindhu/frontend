import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './Product.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Product = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProductList(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='p-f-container'>
          <div className='f-con'>
            <div className='customizble'>
                <p className='box'></p>
                <p>CUSTOMIZBLE</p>
            </div>
            <hr className='line'/>
            <div className='filter-item'>
                <div className='filter-type'>
                    <p className='head'>IDEAL FOR </p>
                    <p className='all'>ALL</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
            <hr className='line'/>
            <div className='filter-item'>
                <div className='filter-type'>
                    <p className='head'>IDEAL FOR </p>
                    <p className='all'>ALL</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
            <hr className='line'/>
            <div className='filter-item'>
                <div className='filter-type'>
                    <p className='head'>OCCASSION</p>
                    <p className='all'>ALL</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
            <hr className='line'/>
            <div className='filter-item'>
                <div className='filter-type'>
                    <p className='head'>WORK </p>
                    <p className='all'>ALL</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
            <hr className='line'/>
            <div className='filter-item'>
                <div className='filter-type'>
                    <p className='head'>FABRIC </p>
                    <p className='all'>ALL</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
            <hr className='line'/>
            <div className='filter-item'>
                <div className='filter-type'>
                    <p className='head'>SEGMENT </p>
                    <p className='all'>ALL</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
            <hr className='line'/>
            <div className='filter-item'>
                <div className='filter-type'>
                    <p className='head'>SUITABLE FOR</p>
                    <p className='all'>ALL</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
            <hr className='line'/>
            <div className='filter-item'>
                <div className='filter-type'>
                    <p className='head'>RAW MATERIALS</p>
                    <p className='all'>ALL</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
            <hr className='line'/>
            <div className='filter-item'>
                <div className='filter-type'>
                    <p className='head'>PATTERN</p>
                    <p className='all'>ALL</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
            <hr className='line'/>
          </div>
            <ul className='p-con'>
                {productList.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>

        </div>
    );
};

export default Product;
