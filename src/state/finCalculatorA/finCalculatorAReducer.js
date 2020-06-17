import {
  CHANGE_CALC_TYPE,
  // CHANGE_ACTIVE_STEP_INDEX,
  CHANGE_CURRENCY,
  CHANGE_CURRENCY_LABEL,
  CHANGE_LOAN_AMOUNT,
  CHANGE_INTEREST_RATE,
  CHANGE_NUMBER_OF_PERIODS,
} from "./finCalculatorATypes";

const initialState = {
  calculatorTypeIndex: 0,
  // activeStepIndex: 0,
  currency: "EUR",
  currencyLabel: "€",
  loanAmount: 1000,
  interestRate: 100,
  numberOfPeriods: 60,
};

const finCalculatorAReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CALC_TYPE:
      return {
        ...state,
        calculatorTypeIndex: action.payload,
      };
    // case CHANGE_ACTIVE_STEP_INDEX:
    //   return {
    //     ...state,
    //     activeStepIndex: action.payload,
    //   };
    case CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };
    case CHANGE_CURRENCY_LABEL:
      return {
        ...state,
        currencyLabel: action.payload,
      };
    case CHANGE_LOAN_AMOUNT:
      return {
        ...state,
        loanAmount: action.payload,
      };
    case CHANGE_INTEREST_RATE:
      return {
        ...state,
        interestRate: action.payload,
      };
    case CHANGE_NUMBER_OF_PERIODS:
      return {
        ...state,
        numberOfPeriods: action.payload,
      };

    default:
      return state;
  }
};

export default finCalculatorAReducer;
