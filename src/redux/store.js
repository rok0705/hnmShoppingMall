import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/index";

let store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
