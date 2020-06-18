import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import finCalculatorAReducer from "./finCalculatorA/finCalculatorAReducer";

const store = createStore(
  finCalculatorAReducer,
  composeWithDevTools(applyMiddleware())
);

export default store;
