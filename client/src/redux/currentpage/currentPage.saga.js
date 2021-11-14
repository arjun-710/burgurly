import {takeEvery} from 'redux-saga/effects'
function* setCurrentPage(action){
    if(action.payload === "Home"){
        yield console.log(action.payload);
    }
}
export function* currentPage(){
    yield takeEvery("SET_CURRENT_PAGE",setCurrentPage)
}