import {takeEvery,put, select} from 'redux-saga/effects'
import { setdishsection } from '../dishes/dishes.action';
import { getRestaurantDetails } from '../restaurant/restaurant.actions';

export const current = (state) => state.auth?.user;
export const dishCategory = (state) => state.category?.dishsection;
function* setCurrentPage(action){
    if(action.payload!=null){
        if(action.payload.type==='Customer'){
            return
        }
        else if(action.payload.type==='Partner'){
            console.log("restaurnt saga called");
            yield put(setdishsection("MainCourse"));
            yield put(getRestaurantDetails(action.payload._id));
        }
    }
}
export function* currentPageSaga(){
    yield takeEvery("FETCH_USER",setCurrentPage)
}

function* setCurrentHomeWithListRestaurants(){
    const user=yield select(current);
    const dishSection=yield select(dishCategory);
    yield console.log();
    if(user?.type==='Customer'){
        if(dishSection==null){
            return
        }
      yield put(setdishsection(null));
    }
    
}

export function* setCurrentHomeWithListRestaurantsSaga(){
    yield takeEvery('SET_CURRENT_PAGE',setCurrentHomeWithListRestaurants)
    
}