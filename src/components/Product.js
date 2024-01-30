import React from 'react';
import "./ProductStyles.css";

const Product = (props) => {
  return (
            <div className='product-card'>
                <h2 className='product-title'>{props.title}</h2>
                <div className='product-details'>
                    <p>{props.details}</p>
                </div>
            </div>
  )
}

export default Product