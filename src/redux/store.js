import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import authenticateReducer from "./reducers/authenticateReducer";
import rootReducers from "./reducers/index";

// 1. redux
let store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

// 2. redux tool kit
// configureStore({
//   auth: authenticateReducer,
//   product: productReducer,
// });

export default store;
