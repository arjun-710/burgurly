export const addCartItem=(item)=>{
    console.log(item);
    return {
        type:"ADD_CART_ITEM",
        payload:item
    }
}

export const deleteCartItem=(item)=>{
    return {
        type:"DELETE_CART_ITEM",
        payload:item
    }
}