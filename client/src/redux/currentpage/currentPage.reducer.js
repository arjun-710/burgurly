const initalState={
    page:'home'
}
const currentPageReducer=(state=initalState,action)=>{
    switch(action.type){
        case 'SET_CURRENT_PAGE':
            return {page:action.payload}
        default:
            return state
    }
}

export default currentPageReducer