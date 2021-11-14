import axios from 'axios'
export const getRestaurants=()=>{
    return async (dispatch)=>{
        const {data}=await axios.get('/api/partner/restaurants');
        dispatch({type:'GET_RESTAURANTS',payload:data})
    }
}

export const CurrentRestaurant=(query)=>{
    return{
        type:"CURRENT_RESTAURANT",
        payload:query
    }
}

export const getMenu=(prop)=>{
    const {id, menuName}=prop;
    return async (dispatch)=>{
        const {data}=await axios.post('/api/partner/restaurants/menu',{
            id,menuName
        });
        dispatch({type:'GET_MENU',payload:data})
    }
}

export const getRestaurantDetails=(id)=>{
    return async (dispatch)=>{
        const {data}=await axios.post('/api/partner/restaurant/info',{
            id
        });
        dispatch({type:'GET_RESTAURANT_INFO',payload:data})
    }
}
