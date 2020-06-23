import React, { useState } from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import StartMenu from "components/Menu/StartMenu.js";

import styles from "jss/pages/startPageStyle.js";

const useStyles = makeStyles(styles);

export default function StartPage() {
  const classes = useStyles();
  const [menuIndex, setMenuIndex] = useState(0);

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
        <StartMenu menuIndex={menuIndex} setMenuIndex={setMenuIndex} />
      </div>
    </div>
  );
}
