import { combineReducers } from "redux";
import authReducer from './auth/auth.reducer'
import currentPageReducer from "./currentpage/currentPage.reducer";
import { OrderReducer } from "../../customer/redux/Order/order.reducer";
import restaurantReducer from "./restaurant/restaurant.reducer";
import dishReducer from "./dishes/dishes.reducer";
export const rootReducer=combineReducers({
    auth:authReducer,
    page:currentPageReducer,
    order:OrderReducer,
    category:dishReducer,
    restaurants:restaurantReducer
})