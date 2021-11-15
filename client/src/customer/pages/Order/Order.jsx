import React,{useState} from 'react'
import './Order.scss'
import Button from '../../components/Button/Button'
import OrderItem from '../../components/OrderItem/OrderItem'
import {ReactComponent as Right} from '../../../../assets/right.svg'
import {ReactComponent as Left} from '../../../../assets/left.svg'
import {useSelector} from 'react-redux'
const Order = () => {
    const [clicked,setclicked]=useState(false);
    const cartitems=useSelector((state)=>state.order.cart);
    const total=cartitems.reduce((accumulator,item)=>{
        return accumulator + (item.price * item.quantity)
    },0);
    return (
        <>
        <div className={`${clicked && "order__clicked"} order`}>
        {window.innerWidth<700 && <div className={`${clicked ? "left" : "right"}`} onClick={()=>setclicked(!clicked)}>{clicked ? <Left/>:<Right />}</div>}
            <div className="order__heading heading-3">Orders #34562</div>
            <div className="order__button"><Button type="primary" config="ordertype">Dine In</Button></div>
            <div className="order__description">
                <div className="order__description-item order__description-item-1">Item</div>
                <div className="order__description-item order__description-item-2">Qty</div>
                <div className="order__description-item order__description-item-3">Price</div>
            </div>
            <div className="order__item">
                {cartitems.map((item,index)=>{
                    return <OrderItem key={index} item={item}/>
                })}
            </div>
            <div className="order__discount">
                <div className="order__discount-text u-color-light">Discount</div>
                <div className="order__discount-number"><span className="u-margin-right-sm">$</span>0</div>
            </div>
            <div className="order__total">
                <div className="order__total-text u-color-light">Sub total</div>
                <div className="order__total-number"><span className="u-margin-right-sm">$</span>{total.toFixed(2)}</div>
            </div>
            <div className="order__payment"><Button type="primary" config="orderpayment">Continue to Payment</Button></div>
        </div>
        </>
    )
}

export default Order
