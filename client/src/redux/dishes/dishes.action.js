import axios from 'axios'
export const fetchDishes=(category)=>{
  console.log(category);
    return async (dispatch)=>{
        const {data}=await axios.get(`/api/partner/menu/${category}`);
        dispatch({type:'FETCH_DISHES',payload:data})
    }
}