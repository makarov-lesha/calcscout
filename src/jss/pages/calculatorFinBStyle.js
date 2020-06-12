import { grayColor, cardTitle } from "jss/material-dashboard-pro-react.js";

const finCalculatorBStyle = (theme) => ({
  containerCalculator: {
    display: "grid",
    gridTemplateRows: "auto minmax(60vh, 1fr) auto",
    gridTemplateColumns: "1fr",
    gridGap: "0.5rem",
  },
  containerStep1: {
    display: "grid",
    gridTemplateRows: "repeat(4, minmax(15vh, 1fr))",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `
                "input1 result"
                "input1 result"
                "input3 chart"
                "input4 chart"
    `,
    gridGap: "0.5rem",
    // alignItems: "center",
    // justifyItems: "center",
  },
  containerLoanDetails: {
    display: "grid",
    gridTemplateRows: "repeat(3, auto)",
    gridTemplateColumns: "2fr 3fr",
    gridTemplateAreas: `
                "currency loanValue"
                "slider1 slider1"
                "slider2 slider2"
    `,
    gridGap: "0.4rem",
  },

  currencyArea: {
    gridArea: "currency",
  },

  loanValueArea: {
    gridArea: "loanValue",
    justifySelf: "end",
  },
  slider1Area: {
    gridArea: "slider1",
    alignSelf: "center",
    justifySelf: "center",
    width: "95%",
  },
  slider2Area: {
    gridArea: "slider2",
    alignSelf: "center",
    justifySelf: "center",
    width: "95%",
  },

  input1: {
    gridArea: "input1",
    alignSelf: "stretch",
  },

  input3: {
    gridArea: "input3",
  },
  input4: {
    gridArea: "input4",
  },
  chart: {
    gridArea: "chart",
  },
  result: {
    gridArea: "result",
  },
  cardNotMoved: {
    marginTop: 0,
    height: "100%",
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },

  containerMainIndicators: {
    display: "grid",
    gridTemplateRows: "2fr 1fr",
    gridTemplateColumns: "1fr 2fr",
    gridTemplateAreas: `
                "indicator1 indicator2"
                "indicator3 indicator4"
    `,
    gridGap: "0.4rem",
  },
  indicator1: {
    gridArea: "indicator1",
    alignSelf: "center",
    justifySelf: "center",
    width: "100%",
    height: "100%",
  },
  indicator2: {
    gridArea: "indicator2",
    alignSelf: "center",
    justifySelf: "center",
    width: "100%",
    height: "100%",
  },
  indicator3: {
    gridArea: "indicator3",
    alignSelf: "center",
    justifySelf: "center",
    width: "100%",
    height: "100%",
  },
  indicator4: {
    gridArea: "indicator4",
    alignSelf: "center",
    justifySelf: "center",
    width: "100%",
    height: "100%",
  },
});

export default finCalculatorBStyle;
