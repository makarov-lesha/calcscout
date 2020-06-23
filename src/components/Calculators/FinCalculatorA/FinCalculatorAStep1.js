import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";

// @material-ui/icons
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import BarChartIcon from "@material-ui/icons/BarChart";

//core components
import SelectCurrency from "components/Calculators/FinCalculatorA/SelectCurrency.js";
import InputLoanAmount from "components/Calculators/FinCalculatorA/InputLoanAmount.js";
import NumberOfPeriodsSlider from "components/Calculators/FinCalculatorA/NumberOfPeriodsSlider.js";
import InterestRateSlider from "components/Calculators/FinCalculatorA/InterestRateSlider.js";
import FinCalculatorAResults1 from "components/Calculators/FinCalculatorA/FinCalculatorAResults1";

//charts
import { ResponsiveTreeMap } from "@nivo/treemap";
// import { ResponsiveBar } from "@nivo/bar";
import treeMapData from "components/Charts/Data/treemapData";
// import barData from "components/Charts/Data/barNivoData.js";

//styles
import styles from "jss/pages/calculatorFinAStyle.js";

const useStyles = makeStyles(styles);

export default function FinCalculatorAStep1(props) {
  document.getElementById("scrollContainer");

  const classes = useStyles();
  const [copyTreeMapData, setCopyTreeMapData] = useState({ ...treeMapData });

  const loanAmount = useSelector(
    (state) => state.chartData.finCalculatorAChart1.loanAmount
  );

  const sumOfInterestPayments = useSelector(
    (state) => state.chartData.finCalculatorAChart1.sumOfInterestPayments
  );

  const currencyLabel = useSelector((state) => state.currencyLabel);

  useEffect(() => {
    document.getElementById("scrollContainer").scrollTop = 0;
  }, []);

  useEffect(() => {
    setCopyTreeMapData(
      { ...copyTreeMapData },
      (copyTreeMapData.children[0].loc = loanAmount),
      (copyTreeMapData.children[1].loc = sumOfInterestPayments)
    );
  }, [loanAmount, sumOfInterestPayments]);

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
                  title={"Interest rate (%)"}
                  defaultValue={210}
                  step={1}
                  minValue={0}
                  maxValue={1000}
                />
              </div>
              <div className={classes.slider2Area}>
                <NumberOfPeriodsSlider
                  title={"Number of periods (months)"}
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
          <CardBody
            style={{ height: "200px", width: "90%", alignSelf: "center" }}
          ></CardBody>
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
          <CardBody
            style={{ height: "200px", width: "90%", alignSelf: "center" }}
          >
            <ResponsiveTreeMap
              root={copyTreeMapData}
              identity="name"
              value="loc"
              innerPadding={3}
              outerPadding={3}
              margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
              label={function (e) {
                return e.name + " (" + currencyLabel + e.loc.toFixed(0) + ")";
              }}
              labelSkipSize={12}
              labelTextColor={{ from: "color", modifiers: [["darker", 1.2]] }}
              colors={{ scheme: "blues" }}
              borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
              animate={true}
              motionStiffness={90}
              motionDamping={11}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
