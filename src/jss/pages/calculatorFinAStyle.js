import { grayColor, cardTitle } from "jss/material-dashboard-pro-react.js";

const title = {
  color: grayColor[2],
  textDecoration: "none",
  fontWeight: "300",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    color: grayColor[1],
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
  },
};

const finCalculatorAStyle = (theme) => ({
  containerCalculator: {
    display: "grid",
    gridTemplateRows: "auto minmax(40vh, 1fr) auto",
    gridTemplateColumns: "100%",
    gridGap: "0.5rem",
  },
  containerStep1: {
    display: "grid",
    gridGap: "0.5rem",
    gridTemplateRows: "minmax(20vh, 1fr) 300px",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `
              "input1 result"
              "chart1 chart2" 
    `,

    "@media (max-width: 768px)": {
      gridTemplateRows: "minmax(20vh, 1fr) minmax(20vh, 1fr) 300px 300px",
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
                  "input1"
                  "result"
                  "chart1" 
                  "chart2" 
      `,
    },
  },

  cardNoMargin: {
    marginBottom: 0,
  },

  input1: {
    gridArea: "input1",
    alignSelf: "stretch",
  },

  result: {
    gridArea: "result",
    alignSelf: "stretch",
  },

  chart1: {
    gridArea: "chart1",
    alignSelf: "stretch",
  },

  chart2: {
    gridArea: "chart2",
    alignSelf: "stretch",
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

  containerInput1: {
    display: "grid",
    gridTemplateRows: "repeat(3, auto)",
    gridTemplateColumns: "2fr 3fr",
    gridTemplateAreas: `
                "currency loanValue"
                "slider1 slider1"
                "slider2 slider2"
    `,
    gridGap: "0.4rem",
    // "@media (max-width: 768px)": {
    //   gridTemplateRows: "repeat(4, auto)",
    //   gridTemplateColumns: "1fr",
    //   gridTemplateAreas: `
    //             "currency"
    //             "loanValue"
    //             "slider1"
    //             "slider2"
    // `,
    // },
  },

  currencyArea: {
    gridArea: "currency",
    "@media (max-width: 768px)": {
      justifySelf: "stretch",
    },
  },

  loanValueArea: {
    gridArea: "loanValue",
    justifySelf: "end",
    "@media (max-width: 768px)": {
      justifySelf: "stretch",
    },
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

  containerResult: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `
                "indicator1 indicator2"
                "indicator3 indicator4"
    `,
    gridGap: "0.4rem",
    width: "100%",
    height: "100%",
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
  paper1: {
    width: "100%",
    height: "100%",
    display: "flex",
    paddingLeft: "7px",
    flexDirection: "column",
    justifyContent: "center",
  },
  indicatorCaption: {
    color: grayColor[0],
    fontSize: "14px",
    paddingTop: "10px",
    marginBottom: "0",
    marginTop: "0",
    margin: "0",
    alignSelf: "center",
    textAlign: "center",
  },

  indicatorValue: {
    ...title,
    marginTop: "5px",
    marginBottom: "3px",
    alignSelf: "center",
    textAlign: "center",
  },
});

export default finCalculatorAStyle;
