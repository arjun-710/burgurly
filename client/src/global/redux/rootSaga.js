import { all,call } from "@redux-saga/core/effects";
import { currentPageSaga, setCurrentHomeWithListRestaurantsSaga } from "./currentpage/currentPage.saga";
import {DishSection} from './dishes/dishes.saga'
import { CheckIfNewRestaurantSaga, FetchDishesSaga } from "./restaurant/restaurant.sagas";
function* rootSaga(){
    yield all([call(currentPageSaga), call(DishSection), call(FetchDishesSaga), call(CheckIfNewRestaurantSaga),call(setCurrentHomeWithListRestaurantsSaga)])
}
export default rootSaga;