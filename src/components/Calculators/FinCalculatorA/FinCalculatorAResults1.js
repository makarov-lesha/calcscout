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

  const [monthlyPayment, setMonthlyPayment] = useState(17.1);
  const [sumOfInterestPayments, setSumOfInterestPayments] = useState(25.6);

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
      setMonthlyPayment(wbRef.current.Sheets.Sheet1["C14"].v.toFixed(1));
      setSumOfInterestPayments(wbRef.current.Sheets.Sheet1["C11"].v.toFixed(0));
    }
  }, [loanAmount, interestRate, numberOfPeriods]);

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
                <p className={classes.indicatorCaption}>Loan Principal</p>
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
                <p className={classes.indicatorCaption}>repaid in</p>
                <h3 className={classes.indicatorValue}>{`${
                  numberOfPeriods / 12
                } years`}</h3>
              </Paper>
            </div>
            <div className={classes.indicator2}>
              <Paper
                elevation={3}
                className={classes.paper1}
                style={{ justifyContent: "center" }}
              >
                <p className={classes.indicatorCaption}>Monthly Payment</p>
                <h3
                  className={classes.indicatorValue}
                >{`${currencyLabel}${monthlyPayment}`}</h3>
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
                  Sum of all interest payments
                </p>
                <h3
                  className={classes.indicatorValue}
                >{`${currencyLabel}${sumOfInterestPayments}`}</h3>{" "}
              </Paper>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
