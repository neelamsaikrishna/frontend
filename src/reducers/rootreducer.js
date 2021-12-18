import counterReducer from "./counterreducer";
//import productReducer from "./productreducer";
import loginReducer from "./loginreducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  count: counterReducer,
  //fakeStore: productReducer,
  login: loginReducer,
});

export default rootReducer;