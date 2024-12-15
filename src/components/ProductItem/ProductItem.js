import React from 'react';
import './ProductItem.css'

const ProductItem = ({ product }) => {
  return (
    <li className='list-item'>
      <img src={product.image} alt={product.category} className='image'/>
      <h3 className='product-title'>{product.title}</h3>
    </li>
  );
};

export default ProductItem;
