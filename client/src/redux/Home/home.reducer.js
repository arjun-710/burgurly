const initialState={
    dishsection:null,
    dish:[],
    search:[]
}
export const dishSectionReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "SET_DISH_SECTION":
            return {
                ...state,
                dishsection:action.payload
            }
        case "SET_DISH":
            return {
                ...state,
                dish:action.payload
            }
        case "GET_SUGGESTIONS":
            return{
                ...state,
                search:action.payload
            }
        default:
            return state
    }
}