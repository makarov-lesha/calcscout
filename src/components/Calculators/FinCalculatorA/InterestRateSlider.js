import React, { useState } from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { changeInterestRate } from "stateManager/index";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = withStyles({
  root: {
    color: "#3880ff",
    height: 2,
    padding: "15px 0",
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000",
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
})(Slider);

const useStyles = makeStyles({
  root: {},
});

const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 300,
  },
  {
    value: 500,
    label: "5%",
  },
  {
    value: 700,
  },
  {
    value: 1000,
    label: "10%",
  },
];

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

export default function InterestRateSlider(props) {
  const { minValue, maxValue, title, step } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  // const interestRate = useSelector((state) => state.interestRate);
  const [interestRateIntState, setInterestRateIntState] = useState(500);

  const changeGlobalState = (event, newValue) => {
    dispatch(changeInterestRate(newValue));
  };

  const changeInternalState = (event, newValue) => {
    setInterestRateIntState(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={1}>
        <Grid item container align="center" justify="space-between">
          <Grid item>
            <h5>{title}</h5>
          </Grid>
          <Grid item>
            <h5>
              <small>{(interestRateIntState / 100).toFixed(2) + "%"}</small>
            </h5>
          </Grid>
        </Grid>
        <Grid item xs>
          <IOSSlider
            value={interestRateIntState}
            ValueLabelComponent={ValueLabelComponent}
            onChange={changeInternalState}
            onChangeCommitted={changeGlobalState}
            aria-labelledby="continuous-slider"
            min={minValue}
            step={step}
            max={maxValue}
            valueLabelDisplay="auto"
            valueLabelFormat={(x) => `${x / 100} %`}
            marks={marks}
          />
        </Grid>
      </Grid>
    </div>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

InterestRateSlider.propTypes = {
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  title: PropTypes.string,
  step: PropTypes.number,
};
