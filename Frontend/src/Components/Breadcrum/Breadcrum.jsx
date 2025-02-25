import React from 'react'
import PropTypes from 'prop-types';
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'


const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" /> {product.category}<img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

Breadcrum.propTypes = {
    product: PropTypes.shape({
        category: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
}

export default Breadcrum;
