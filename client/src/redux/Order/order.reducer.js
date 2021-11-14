import {addCartItem,deleteCartItem} from './order.utility'
const initialState={
    cart:[]
}
export const OrderReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "ADD_CART_ITEM":
            return {
                ...state,
                cart:addCartItem(state.cart,action.payload)
                // cart:[...state.cart , action.payload]
            }
        case "DELETE_CART_ITEM":
            return {
                ...state,
                cart:deleteCartItem(state.cart,action.payload)
            }
        default:
            return state
    }
}