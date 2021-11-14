import { combineReducers } from "redux";
import authReducer from './auth/auth.reducer'
import currentPageReducer from "./currentpage/currentPage.reducer";
import dishReducer from "./dishes/dishes.reducer";
import { dishSectionReducer } from "./Home/home.reducer";
import { OrderReducer } from "./Order/order.reducer";
import restaurantReducer from "./restaurant/restaurant.reducer";
export const rootReducer=combineReducers({
    auth:authReducer,
    page:currentPageReducer,
    dish:dishSectionReducer,
    order:OrderReducer,
    category:dishReducer,
    restaurants:restaurantReducer
})