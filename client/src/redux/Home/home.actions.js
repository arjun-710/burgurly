export const setdishsection=(dishsection)=>{
    return{
        type:"SET_DISH_SECTION",
        payload:dishsection
    }
}

export const fetchDish=(query)=>{
    return{
        type:"FETCH_DISH",
        payload:query
    }
}

export const setDish=(dish)=>{
    return{
        type:"SET_DISH",
        payload:dish
    }
}

export const SearchFood=(query)=>{
    return{
        type:"SEARCH_FOOD",
        payload:query
    }
}

export const SetSuggestions=(query)=>{
    return{
        type:"GET_SUGGESTIONS",
        payload:query
    }
}