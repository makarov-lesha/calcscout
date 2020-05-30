import React, { useState, useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

//styles
import styles from "jss/pages/calculatorFinAStyle.js";

const useStyles = makeStyles(styles);

export default function FinCalculatorC() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" component="h1" align="center">
        Fin Calculator C
      </Typography>
    </div>
  );
}