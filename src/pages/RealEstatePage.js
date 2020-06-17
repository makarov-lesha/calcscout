import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "jss/pages/rePageStyle.js";

const useStyles = makeStyles(styles);

export default function StartPage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <GridContainer justify="center" direction="column" alignItems="center">
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>Real Estate Tools</h2>
          <h5 className={classes.description}>
            To make your life slightly easier.
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Button
            variant="contained"
            color="facebook"
            component={Link}
            to="/calculator/re-calc-a"
          >
            Real Estate CALCULATORs
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
