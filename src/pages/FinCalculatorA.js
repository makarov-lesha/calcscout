import React, { useState, useEffect } from "react";

//redux
import { useSelector } from "react-redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";

// @material-ui icons
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

//other components
import Button from "components/CustomButtons/Button.js";
import CalculatorTypeSelector from "components/Calculators/FinCalculatorA/CalculatorTypeSelector.js";
import FinCalculatorAStep1 from "components/Calculators/FinCalculatorA/FinCalculatorAStep1.js";

//styles
import styles from "jss/pages/calculatorFinAStyle.js";

const useStyles = makeStyles(styles);

//main parameters for start of the Calculator

export default function FinCalculatorA() {
  const classes = useStyles();

  //From REDUX
  const calculatorTypeIndex = useSelector((state) => state.calculatorTypeIndex);

  //Hooks State
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  function changeStepIndex(increment) {
    const newIndex =
      activeStepIndex + increment < 0 ? 0 : activeStepIndex + increment;
    setActiveStepIndex(newIndex);
  }

  useEffect(() => {
    document.getElementById("scrollContainer").scrollTop = 0;
  }, [activeStepIndex]);

  return (
    <div className={classes.containerCalculator}>
      <Typography variant="h5" component="h1" align="center">
        Check Your Financing
      </Typography>

      <div>
        {activeStepIndex === 0 && <CalculatorTypeSelector />}
        {activeStepIndex === 1 && <FinCalculatorAStep1 />}
      </div>

      <div style={{ justifySelf: "center" }}>
        {activeStepIndex > 0 && (
          <Button
            color="info"
            onClick={() => {
              changeStepIndex(-1);
            }}
          >
            <KeyboardArrowLeft className={classes.icons} /> Back
          </Button>
        )}
        <Button
          color="info"
          onClick={() => {
            changeStepIndex(1);
          }}
          disabled={activeStepIndex >= 1}
        >
          {activeStepIndex === 0 ? "Estimate" : "Next"}
          {activeStepIndex !== 0 && (
            <KeyboardArrowRight className={classes.icons} />
          )}
        </Button>
        <Typography
          variant="caption"
          display="block"
          align="center"
          className={classes.mutedText}
        >
          {`${
            calculatorTypeIndex === 0 ? "Selected: Cash" : "Selected: Mortgage"
          }`}
        </Typography>
      </div>
    </div>
  );
}
