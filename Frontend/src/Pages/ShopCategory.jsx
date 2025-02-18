import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
    </div>

  )
}
ShopCategory.propTypes = {
  banner: PropTypes.string.isRequired,
};

export default ShopCategory;

