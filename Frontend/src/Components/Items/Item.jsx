import React from 'react'
import PropTypes from 'prop-types'
import './Item.css'
import { Link } from 'react-router-dom'

 const Item = (props) => {
  return (
    <div className='item'> 
    <Link to = {`/product/${props.id}`} > <img onClick={window.scrollTo(0,0)}  src={props.image} alt="" /> </Link>
    <p>{props.name}</p>
    <div className='item-prices'></div>
        <div className='item-price-new'>
        ${props.new_price}
        </div>
        <div className='item-price-old'>
        {props.old_price}
        </div>

    </div>
  )
}
Item.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  new_price: PropTypes.number.isRequired,
  old_price: PropTypes.number.isRequired,
};

export default Item;
