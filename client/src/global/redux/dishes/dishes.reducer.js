const initialState={
  dishes:null,
  dishsection:null,
}

const dishReducer=(state=initialState,action)=>{
  switch (action.type) {
      case 'FETCH_DISHES':
          return {
            ...state,
            dishes:action.payload
          }    
      case "SET_DISH_SECTION":
        return {
            ...state,
            dishsection:action.payload
        }
      default:
          return state
  }
}

export default dishReducer