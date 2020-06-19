import {
  CHANGE_CALC_TYPE,
  CHANGE_CURRENCY,
  CHANGE_LOAN_AMOUNT,
  CHANGE_INTEREST_RATE,
  CHANGE_NUMBER_OF_PERIODS,
  CHANGE_CURRENCY_LABEL,
  UPDATE_CHART_DATA,
} from "./finCalculatorATypes";

export const changeCalcType = (index) => {
  return {
    type: CHANGE_CALC_TYPE,
    payload: index,
  };
};

export const changeCurrency = (currency) => {
  return {
    type: CHANGE_CURRENCY,
    payload: currency,
  };
};

export const changeCurrencyLabel = (currencyLabel) => {
  return {
    type: CHANGE_CURRENCY_LABEL,
    payload: currencyLabel,
  };
};

export const changeLoanAmount = (amount) => {
  return {
    type: CHANGE_LOAN_AMOUNT,
    payload: amount,
  };
};

export const changeInterestRate = (rate) => {
  return {
    type: CHANGE_INTEREST_RATE,
    payload: rate,
  };
};

export const changeNumberOfPeriods = (numOfPeriods) => {
  return {
    type: CHANGE_NUMBER_OF_PERIODS,
    payload: numOfPeriods,
  };
};

export const updateChartData = (chartName, fieldName, payload) => {
  return {
    type: UPDATE_CHART_DATA,
    chartName: chartName,
    fieldName: fieldName,
    payload: payload,
  };
};
