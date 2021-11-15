import axios from 'axios'
export const fetchDishes=(category)=>{
  console.log(category);
    return async (dispatch)=>{
        const {data}=await axios.get(`/api/partner/menu/${category}`);
        dispatch({type:'FETCH_DISHES',payload:data})
    }
}

export const setdishsection=(dishsection)=>{
  return{
      type:"SET_DISH_SECTION",
      payload:dishsection
  }
}