import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateChartData } from "stateManager/index";
import NumberFormat from "react-number-format";

//SheetJS
import S5SCalc from "@sheet/formula";
import XLSX from "xlsx";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";

// @material-ui/icons
import AppsIcon from "@material-ui/icons/Apps";

//styles
import styles from "jss/pages/calculatorFinAStyle.js";

S5SCalc.XLSXLib = XLSX;
const useStyles = makeStyles(styles);

export default function FinCalculatorAResults1() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const loanAmount = useSelector((state) => state.loanAmount);
  const interestRate = useSelector((state) => state.interestRate);
  const numberOfPeriods = useSelector((state) => state.numberOfPeriods);
  const currencyLabel = useSelector((state) => state.currencyLabel);
  const defaultMonthlyPayment = useSelector(
    (state) => state.defaultMonthlyPayment
  );
  const defaultSumOfInterestPayments = useSelector(
    (state) => state.defaultSumOfInterestPayments
  );

  const [monthlyPayment, setMonthlyPayment] = useState(defaultMonthlyPayment);
  const [sumOfInterestPayments, setSumOfInterestPayments] = useState(
    defaultSumOfInterestPayments
  );

  const [excelObjectData, setExcelObjectData] = useState("");

  const numberOfYears = Math.floor(numberOfPeriods / 12);
  const numberOfMonths = numberOfPeriods % 12;
  const textRepaymentPeriods = `${
    numberOfYears === 0 ? "" : numberOfYears + " years"
  } ${numberOfMonths === 0 ? "" : numberOfMonths + " months"} `;

  useEffect(() => {
    fetch("/sheets/finCalculatorA.xlsx")
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        //read file
        setExcelObjectData(XLSX.read(ab, { type: "array", cellStyles: true }));
      });
    // console.log("useeffect for fetching data completed");
  }, []);

  useEffect(() => {
    if (excelObjectData) {
      const updateExcel = (
        loanAmount,
        interestRate,
        numberOfPeriods,
        excelObjectData
      ) => {
        S5SCalc.update_value(excelObjectData, "Sheet1", "F3", loanAmount);
        S5SCalc.update_value(
          excelObjectData,
          "Sheet1",
          "F4",
          interestRate / 10000
        );
        S5SCalc.update_value(excelObjectData, "Sheet1", "F5", numberOfPeriods);
        // S5SCalc.recalculate(excelObjectData);
        setMonthlyPayment(excelObjectData.Sheets.Sheet1["F15"].v);
        setSumOfInterestPayments(excelObjectData.Sheets.Sheet1["F12"].v);
        dispatch(
          updateChartData(
            "finCalculatorAChart1",
            "sumOfInterestPayments",
            excelObjectData.Sheets.Sheet1["F12"].v
          )
        );
        dispatch(
          updateChartData("finCalculatorAChart1", "loanAmount", loanAmount)
        );

        const excelJsonData = XLSX.utils.sheet_to_json(
          excelObjectData.Sheets.Sheet1,
          {
            header: 1,
            raw: true,
          }
        );

        const periodsArrayChart1 = excelJsonData[31].slice(
          excelJsonData[31][1],
          excelJsonData[31][2]
        );

        // // const interestPaymentsArray = excelJsonData[31].slice(
        // //   excelJsonData[31][1],
        // //   excelJsonData[31][2]
        // // );

        // console.log(excelObjectData);
        // console.log(excelJsonData);
        // console.log(periodsArrayChart1);
      };

      updateExcel(loanAmount, interestRate, numberOfPeriods, excelObjectData);
    }
  }, [loanAmount, interestRate, numberOfPeriods, excelObjectData, dispatch]);

  return (
    <>
      <Card>
        <CardHeader color="success" icon>
          <CardIcon color="info">
            <AppsIcon />
          </CardIcon>
          <h4 className={classes.cardIconTitle}>Main Indicators</h4>
        </CardHeader>
        <CardBody>
          <div className={classes.containerResult}>
            <div className={classes.indicator1}>
              <Paper elevation={2} className={classes.paper1}>
                <p className={classes.indicatorCaption}>Loan of</p>
                <h3 className={classes.indicatorValue}>
                  {
                    <NumberFormat
                      value={loanAmount}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={currencyLabel}
                    />
                  }
                </h3>
                <p className={classes.indicatorCaption}>to be repaid in</p>
                <p className={classes.indicatorCaption}>
                  {textRepaymentPeriods}
                </p>
              </Paper>
            </div>
            <div className={classes.indicator2}>
              <Paper
                elevation={7}
                className={classes.paper1}
                style={{ backgroundColor: "rgb(237, 236, 242)" }}
              >
                <p className={classes.indicatorCaption}>Monthly Payment</p>
                <h3 className={classes.indicatorValue}>
                  <NumberFormat
                    value={monthlyPayment}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={currencyLabel}
                    decimalScale={1}
                  />
                </h3>
              </Paper>
            </div>
            <div className={classes.indicator3}>
              <Paper outlined elevation={2} className={classes.paper1}>
                <p className={classes.indicatorCaption}>Interest rate</p>
                <h3 className={classes.indicatorValue}>
                  {(interestRate / 100).toFixed(2)}%
                </h3>
              </Paper>
            </div>
            <div className={classes.indicator4}>
              <Paper outlined elevation={2} className={classes.paper1}>
                <p className={classes.indicatorCaption}>
                  In {textRepaymentPeriods} you will repay to the bank
                </p>
                <h3 className={classes.indicatorValue}>
                  <NumberFormat
                    value={sumOfInterestPayments + loanAmount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={currencyLabel}
                    decimalScale={0}
                  />
                </h3>
              </Paper>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
