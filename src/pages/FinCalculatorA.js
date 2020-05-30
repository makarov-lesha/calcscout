import React, { useState, useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import Heading from "components/Heading/Heading.js";
import PanelsDescriptive from "components/Panels/PanelCalculatorA.js";
import WizEarlyRep1 from "components/Wizards/FinCalcA/WizEarlyRep1.js";
import WizEarlyRep2 from "components/Wizards/FinCalcA/WizEarlyRep2.js";
import WizEarlyRepFinish from "components/Wizards/FinCalcA/WizEarlyRepFinish.js";

import styles from "jss/pages/calculatorFinAStyle.js";

const useStyles = makeStyles(styles);

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

export default function FinCalculatorA() {
  const classes = useStyles();

  const [calculatorTypeIndex, setCalculatorTypeIndex] = useState(
    initialState.calculatorTypeIndex
  );
  const [activeStepIndex, setActiveStepIndex] = useState(
    initialState.activeStepIndex
  );

  const [input0, setInput0] = useState(initialState.input0);
  const [input1, setInput1] = useState(initialState.input1);
  const [input2, setInput2] = useState(initialState.input2);
  const [input3, setInput3] = useState(initialState.input3);

  function handleTabClick(index) {
    setCalculatorTypeIndex(index);
  }

  function changeStepIndex(increment) {
    const newIndex =
      activeStepIndex + increment < 0 ? 0 : activeStepIndex + increment;
    setActiveStepIndex(newIndex);
  }

  return (
    <div>
      <Heading
        textAlign="center"
        title="Calculator"
        category="Estimate penalty of your bank in couple of clicks."
      />
      <GridContainer justify="center" alignItems="center" direction="column">
        <GridItem xs={12}>
          {activeStepIndex === 0 && (
            <PanelsDescriptive handleTabClick={handleTabClick} />
          )}
          {activeStepIndex === 1 && <WizEarlyRep1 />}
          {activeStepIndex === 2 && <WizEarlyRep2 />}
          {activeStepIndex === 3 && <WizEarlyRepFinish />}
        </GridItem>
        <GridItem xs={12}>
          {activeStepIndex > 0 && (
            <Button
              color="default"
              onClick={() => {
                changeStepIndex(-1);
              }}
            >
              <KeyboardArrowLeft className={classes.icons} /> Back
            </Button>
          )}
          <Button
            color="default"
            onClick={() => {
              changeStepIndex(1);
            }}
            disabled={activeStepIndex >= 3}
          >
            {activeStepIndex === 0 ? "Calculate" : "Next"}
            <KeyboardArrowRight className={classes.icons} />
          </Button>
          <Typography
            variant="caption"
            display="block"
            align="center"
            className={classes.mutedText}
          >
            {`${calculatorTypeIndex === 0 ? "(Business)" : "(Individual)"}`}
          </Typography>
        </GridItem>
      </GridContainer>
    </div>
  );
}
