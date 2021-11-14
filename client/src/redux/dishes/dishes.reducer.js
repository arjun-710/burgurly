const initialState={
  dishes:null
}

const dishReducer=(state=initialState,action)=>{
  switch (action.type) {
      case 'FETCH_DISHES':
          return {dishes:action.payload}    
      default:
          return state
  }
}
export default dishReducer