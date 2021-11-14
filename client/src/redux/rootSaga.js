import { all,call } from "@redux-saga/core/effects";
import { currentPage } from "./currentpage/currentPage.saga";
import {DishSection} from './Home/home.saga'
function* rootSaga(){
    yield all([call(currentPage), call(DishSection)])
}
export default rootSaga;