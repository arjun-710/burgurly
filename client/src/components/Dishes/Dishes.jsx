import React from 'react'
import './Dishes.scss'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../../redux/Order/order.action'
const Dishes = ({dish}) => {
    const dispatch = useDispatch();
    return (
        <div className="dishes" onClick={()=>dispatch(addCartItem(dish))}>
            <div className="dishes__image"><img src={dish.image} alt={dish.title} /></div>
            <div className="dishes__description">
                <div className="dishes__description-heading dishes-text">{dish.name}</div>
                <div className="dishes__description-price dishes-text"><span className="u-margin-right-sm">$</span>{dish.price}</div>
                <div className="dishes__description-available dishes-text">{dish.stock} bowls available</div>
            </div>
        </div>
    )
}

export default Dishes


{/* <div className="dishes" onClick={()=>dispatch(addCartItem(fulldish))}>
<div className="dishes__image"><img src={dish.image} alt={dish.title} /></div>
<div className="dishes__description">
    <div className="dishes__description-heading dishes-text">{dish.title}</div>
    <div className="dishes__description-price dishes-text"><span className="u-margin-right-sm">$</span>{price}</div>
    <div className="dishes__description-available dishes-text">{bowls} bowls available</div>
</div>
</div> */}