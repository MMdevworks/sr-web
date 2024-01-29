import React from 'react';
import "./ProductSecondaryStyles.css";

const ProductSecondary = (props) => {
  return (
            <div className='product-sec-card'>
                <h2 className='product-sec-title'>{props.title}</h2>
                <div className='product-sec-details'>
                    <p>{props.details}</p>
                </div>
            </div>
  )
}

export default ProductSecondary