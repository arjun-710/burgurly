export const addCartItem=(cartitems,newitem)=>{
    const existingItem=cartitems.find((item)=>item.id===newitem.id);
    if(existingItem){
        return cartitems.map((item)=>{
            return item.id===newitem.id ? {...item,quantity:item.quantity+1}:item
        })
    }
    return [...cartitems,{...newitem,quantity:1}]
}

export const deleteCartItem=(cartitems,deleteitem)=>{

    const {quantity}= cartitems.find((item)=>item.id===deleteitem.id);
    if(quantity>1){
        return cartitems.map((item)=>{
            return item.id===deleteitem.id ? ( item.quantity !== 0 ? {...item,quantity:item.quantity-1} : null) : item
        })
    }
    return cartitems.filter((item)=>{
        return item.id!==deleteitem.id
    })
}
