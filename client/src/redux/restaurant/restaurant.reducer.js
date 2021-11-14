const initialState={
  restur:[],
  dishes:[],
  current:null
}

const restaurantReducer=(state=initialState,action)=>{
  switch (action.type) {
      case 'GET_RESTAURANTS':
          return {...state, restur: action.payload}
      case 'GET_MENU':
          return {...state,dishes:action.payload}
      case 'CURRENT_RESTAURANT':
        return {...state,current:action.payload}
      default:
          return state
  }
}
export default restaurantReducer