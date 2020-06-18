import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "jss/pages/startPageStyle.js";

const useStyles = makeStyles(styles);

export default function StartPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>
            Calculation Tools <br /> for the World
          </h2>
        </GridItem>
      </GridContainer>
      <div className={classes.gridContainer}>
        <Button color="facebook" component={Link} to="/main/real-estate">
          Real Estate
        </Button>
        <Button color="twitter" component={Link} to="/main/financing">
          Financing
        </Button>
        <Button color="white" component={Link} to="/main/tax">
          Tax
        </Button>
      </div>
    </div>
  );
}
