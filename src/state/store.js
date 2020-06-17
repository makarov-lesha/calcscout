import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import finCalculatorAReducer from "./finCalculatorA/finCalculatorAReducer";

const store = createStore(
  finCalculatorAReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;