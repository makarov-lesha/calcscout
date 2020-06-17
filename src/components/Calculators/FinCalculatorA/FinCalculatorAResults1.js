import React from "react";
import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";

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

const useStyles = makeStyles(styles);

export default function FinCalculatorAResults1(props) {
  const classes = useStyles();

  const loanAmount = useSelector((state) => state.loanAmount);
  const interestRate = useSelector((state) => state.interestRate);
  const numberOfPeriods = useSelector((state) => state.numberOfPeriods);
  const currencyLabel = useSelector((state) => state.currencyLabel);

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
                <p className={classes.indicatorCaption}>Repayment profile</p>
                <h3 className={classes.indicatorValue}>Chart</h3>
              </Paper>
            </div>
            <div className={classes.indicator3}>
              <Paper outlined elevation={2} className={classes.paper1}>
                <p className={classes.indicatorCaption}>Effective rate</p>
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
                <h3 className={classes.indicatorValue}>$130k</h3>{" "}
              </Paper>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
