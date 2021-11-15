import axios from 'axios'
export const fetchUser=()=>{
    return async (dispatch)=>{
        const {data}=await axios.get('/api/current_user');
        dispatch({type:'FETCH_USER',payload:data})
    }
}