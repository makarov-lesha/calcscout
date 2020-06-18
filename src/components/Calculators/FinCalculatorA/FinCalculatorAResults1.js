import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
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

  const wbRef = useRef(null);

  useEffect(() => {
    fetch("/sheets/finCalculatorA.xlsx")
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        //read file
        const wb = XLSX.read(ab, { type: "array", cellStyles: true });
        wbRef.current = wb;
      });
  }, []);

  useEffect(() => {
    if (wbRef.current) {
      S5SCalc.update_value(wbRef.current, "Sheet1", "C2", loanAmount);
      S5SCalc.update_value(wbRef.current, "Sheet1", "C3", interestRate / 10000);
      S5SCalc.update_value(wbRef.current, "Sheet1", "C4", numberOfPeriods);
      setMonthlyPayment(wbRef.current.Sheets.Sheet1["C14"].v);
      setSumOfInterestPayments(wbRef.current.Sheets.Sheet1["C11"].v);
    }
  }, [loanAmount, interestRate, numberOfPeriods]);

  const numberOfYears = Math.floor(numberOfPeriods / 12);
  const numberOfMonths = numberOfPeriods % 12;
  const textRepaymentPeriods = `${
    numberOfYears === 0 ? "" : numberOfYears + " years"
  } ${numberOfMonths === 0 ? "" : numberOfMonths + " months"} `;

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
                <p className={classes.indicatorValue}>{textRepaymentPeriods}</p>
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
                  Total interest paid in <br /> {textRepaymentPeriods}
                </p>
                <h3 className={classes.indicatorValue}>
                  <NumberFormat
                    value={sumOfInterestPayments}
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
