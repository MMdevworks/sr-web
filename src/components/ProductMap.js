import React from 'react';
import "./ProductStyles.css";
import Product from './Product';
import ProductData from './ProductData';

const ProductMap = () => {
  return (
    <div className='work-container'>
        <div className='product-container'>
          {ProductData.map((value,index) => {
            return (
              <Product
              key={index}
              title={value.title}
              details={value.details}
              view={value.view}
              />
            );
            })}
        </div>
    </div>
  )
}

export default ProductMap