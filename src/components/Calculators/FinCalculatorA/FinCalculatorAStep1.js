import React, { useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// @material-ui/icons
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import BarChartIcon from "@material-ui/icons/BarChart";
import AppsIcon from "@material-ui/icons/Apps";

//core components
import SelectCurrency from "components/Calculators/FinCalculatorA/SelectCurrency.js";
import InputLoanAmount from "components/Calculators/FinCalculatorA/InputLoanAmount.js";
import NumberOfPeriodsSlider from "components/Calculators/FinCalculatorA/NumberOfPeriodsSlider.js";
import InterestRateSlider from "components/Calculators/FinCalculatorA/InterestRateSlider1.js";
import FinCalculatorAResults1 from "components/Calculators/FinCalculatorA/FinCalculatorAResults1";

//styles
import styles from "jss/pages/calculatorFinAStyle.js";

const useStyles = makeStyles(styles);

export default function FinCalculatorAStep1(props) {
  document.getElementById("scrollContainer");

  useEffect(() => {
    document.getElementById("scrollContainer").scrollTop = 0;
  });

  const classes = useStyles();

  return (
    <div className={classes.containerStep1}>
      <div className={classes.input1}>
        <Card className={classes.cardNoMargin}>
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
                <NumberOfPeriodsSlider
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

      <div className={classes.result}>
        <FinCalculatorAResults1 />
      </div>

      <div className={classes.chart1}>
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

      <div className={classes.chart2}>
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
