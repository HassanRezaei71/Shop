import { combineReducers } from "redux";
import basketReducer from "./Basket/BasketReducer";

export default combineReducers({
  basketList: basketReducer,
});
