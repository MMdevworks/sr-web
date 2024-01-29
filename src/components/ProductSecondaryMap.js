import React from 'react';
import "./ProductSecondaryStyles.css";
import ProductSecondary from './ProductSecondary';
import ProductSecondaryData from './ProductSecondaryData';

const ProductSecondaryMap = () => {
  return (
    <div className='work-container'>
        <h1 className='product-sec-heading'>We are also excited to announce our upcoming products:</h1>
        <div className='product-sec-container'>
          {ProductSecondaryData.map((value,index) => {
            return (
              <ProductSecondary
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

export default ProductSecondaryMap