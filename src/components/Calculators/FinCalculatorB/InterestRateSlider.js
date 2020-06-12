import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";

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

export default function IosDurationSlider(props) {
  const { defaultValue, minValue, maxValue, title, step } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={1}>
        <Grid item container align="center" justify="flex-end">
          <Grid item>
            <Typography id="continuous-slider" gutterBottom>
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            ValueLabelComponent={ValueLabelComponent}
            onChange={handleChange}
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

IosDurationSlider.propTypes = {
  defaultValue: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  title: PropTypes.string,
  step: PropTypes.number,
};
