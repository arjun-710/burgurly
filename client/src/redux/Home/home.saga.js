import { takeEvery,put,select} from "redux-saga/effects";
import { getMenu } from "../restaurant/restaurant.actions";

export const current = (state) => state.restaurants.current?.id;

function* SetDish(action){
    const menuName=action.payload;
    let restaurant = yield select(current);
    yield put(getMenu({id:restaurant,menuName})) ;
}

export function* DishSection(){
    yield takeEvery("SET_DISH_SECTION",SetDish)
}