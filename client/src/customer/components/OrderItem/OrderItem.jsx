import React from 'react'
import Button from '../Button/Button'
import {ReactComponent as Delete} from '../../../assets/Trash.svg'
import {useDispatch} from 'react-redux';
import './OrderItem.scss'
import { addCartItem,deleteCartItem } from '../../redux/Order/order.action';
const OrderItem = ({item}) => {
    const dispatch = useDispatch();
    const totalprice=(item.quantity * item.price).toFixed(2);
    return (
        <div className='orderitem'>
            <div className="orderitem__detail">
                <div className="orderitem__detail-primary">
                    <div className="orderitem__detail-primary-description">
                        <div className="orderitem__detail-primary-description-image"><img src={item.image} alt="order" /></div>
                        <div className="orderitem__detail-primary-description-text">
                            <div className="orderitem__detail-primary-description-text-heading heading-4">{item.title}</div>
                            <div className="orderitem__detail-primary-description-text-cost u-color-light heading-5">$ {item.price}</div>
                        </div>
                    </div>
                    <div onClick={()=>dispatch(addCartItem(item))} className="orderitem__detail-primary-quantity"><Button type="backgroud-light">{item.quantity}</Button></div>
                    <div className="orderitem__detail-primary-price"><span className="u-margin-right-sm">$</span>{totalprice}</div>
                </div>
                <div className="orderitem__detail-secondary">
                    <div className="orderitem__detail-secondary-inputContainer"><input placeholder='Order Note...'/></div>
                    <div className="orderitem__detail-secondary-delete" onClick={()=>dispatch(deleteCartItem(item))}><Button type="ghost" color="#ff7ca3"><Delete/></Button></div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem
