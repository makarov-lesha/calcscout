import React, { useState, useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";

// @material-ui icons
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

//other components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CalculatorTypeSelector from "components/Calculators/FinCalculatorB/CalculatorTypeSelector.js";
import FinCalculatorBStep1 from "components/Calculators/FinCalculatorB/FinCalculatorBStep1.js";
// import WizEarlyRep2 from "../../components/Wizards/WizEarlyRep2.js";
// import WizEarlyRepFinish from "../../components/Wizards/WizEarlyRepFinish.js";

//styles
import styles from "jss/pages/calculatorFinBStyle.js";

const useStyles = makeStyles(styles);

//main parameters for start of the Calculator
const initialState = {
  calculatorTypeIndex: 0,
  activeStepIndex: 0,
  input0: "",
  input1: "",
  input2: "",
  input3: "",
  inputE: "",
  inputF: "",
  inputG: "",
};

export default function FinCalculatorB() {
  const classes = useStyles();

  const [calculatorTypeIndex, setCalculatorTypeIndex] = useState(
    initialState.calculatorTypeIndex
  );

  const [activeStepIndex, setActiveStepIndex] = useState(
    initialState.activeStepIndex
  );

  function handleTabClick(index) {
    setCalculatorTypeIndex(index);
  }

  function changeStepIndex(increment) {
    const newIndex =
      activeStepIndex + increment < 0 ? 0 : activeStepIndex + increment;
    setActiveStepIndex(newIndex);
  }

  return (
    <div className={classes.containerCalculator}>
      <Typography variant="h5" component="h1" align="center">
        Penalty Estimation
      </Typography>

      <div>
        {activeStepIndex === 0 && (
          <CalculatorTypeSelector handleTabClick={handleTabClick} />
        )}
        {activeStepIndex === 1 && <FinCalculatorBStep1 />}
        {/* {activeStepIndex === 2 && <WizEarlyRep2 />}
          {activeStepIndex === 3 && <WizEarlyRepFinish />} */}
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
          disabled={activeStepIndex >= 3}
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
            calculatorTypeIndex === 0
              ? "Selected: Business"
              : "Selected: Individual"
          }`}
        </Typography>
      </div>
    </div>
  );
}
