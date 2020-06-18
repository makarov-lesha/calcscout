import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";

// @material-ui/icons
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import BarChartIcon from "@material-ui/icons/BarChart";
import AppsIcon from "@material-ui/icons/Apps";

//core components
import SelectCurrency from "components/Calculators/FinCalculatorB/SelectCurrency.js";
import InputLoanAmount from "components/Calculators/FinCalculatorB/InputLoanAmount.js";
import IosDurationSlider from "components/Calculators/FinCalculatorB/NumberOfPeriodsSlider.js";
import InterestRateSlider from "components/Calculators/FinCalculatorB/InterestRateSlider.js";

//styles
import styles from "jss/pages/calculatorFinBStyle.js";

const useStyles = makeStyles(styles);

export default function FinCalculatorBStep1(props) {
  const classes = useStyles();

  return (
    <div className={classes.containerStep1}>
      <div className={classes.input1}>
        <Card>
          <CardHeader color="success" icon>
            <CardIcon color="info">
              <AccountBalanceIcon />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Loan Details</h4>
          </CardHeader>
          <CardBody>
            <div className={classes.containerInput1}>
              <div className={classes.currencyArea}>
                <SelectCurrency />
              </div>
              <div className={classes.loanValueArea}>
                <InputLoanAmount />
              </div>
              <div className={classes.slider1Area}>
                <InterestRateSlider
                  title={"Interest rate"}
                  defaultValue={210}
                  step={10}
                  minValue={0}
                  maxValue={1000}
                />
              </div>
              <div className={classes.slider2Area}>
                <IosDurationSlider
                  title={"Number of periods"}
                  defaultValue={72}
                  step={3}
                  minValue={6}
                  maxValue={120}
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className={classes.input3}>
        <Card className={classes.cardNotMoved}>
          <CardHeader color="success" icon>
            <h4 className={classes.cardIconTitle}>
              Early Repayment Assumption
            </h4>
          </CardHeader>
          <CardBody></CardBody>
        </Card>
      </div>

      <div className={classes.input4}>
        <Card className={classes.cardNotMoved}>
          <CardHeader color="success" icon>
            <h4 className={classes.cardIconTitle}>Additional Parameters</h4>
          </CardHeader>
          <CardBody></CardBody>
        </Card>
      </div>

      <div className={classes.result}>
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
                <Paper
                  variant="outlined"
                  elevation={0}
                  className={classes.paper1}
                >
                  <p className={classes.indicatorCaption}>Loan Principal</p>
                  <h3 className={classes.indicatorValue}>$700k</h3>
                  <p className={classes.indicatorCaption}>repaid in</p>
                  <h3 className={classes.indicatorValue}>5 years</h3>
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
                <Paper
                  variant="outlined"
                  outlined
                  elevation={0}
                  className={classes.paper1}
                >
                  <p className={classes.indicatorCaption}>Effective rate</p>
                  <h3 className={classes.indicatorValue}>2.7%</h3>
                </Paper>
              </div>
              <div className={classes.indicator4}>
                <Paper
                  variant="outlined"
                  outlined
                  elevation={0}
                  className={classes.paper1}
                >
                  <p className={classes.indicatorCaption}>
                    Sum of all interest payments
                  </p>
                  <h3 className={classes.indicatorValue}>$130k</h3>{" "}
                </Paper>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className={classes.chart}>
        <Card>
          <CardHeader color="success" icon>
            <CardIcon color="info">
              <BarChartIcon />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Chart</h4>
          </CardHeader>
          <CardBody></CardBody>
        </Card>
      </div>
    </div>
  );
}
