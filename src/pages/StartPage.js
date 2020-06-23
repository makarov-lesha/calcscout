import React, { useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
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
          <h3 className={classes.title}>Calculation Tools</h3>
        </GridItem>
      </GridContainer>
      <div className={classes.gridContainer}>
        <StartMenu menuIndex={menuIndex} setMenuIndex={setMenuIndex} />
      </div>
      {menuIndex > 0 && (
        <div className={classes.arrowButtonsContainer}>
          <IconButton
            className={classes.arrow}
            color="white"
            aria-label="add to shopping cart"
            onClick={() => setMenuIndex(0)}
          >
            <ArrowBackIosIcon classes={{ root: classes.arrowIcon }} />
          </IconButton>
          <IconButton
            className={classes.arrow}
            color="white"
            aria-label="add to shopping cart"
            disabled
          >
            <ArrowForwardIosIcon
            // color="primary"
            />
          </IconButton>
        </div>
      )}
    </div>
  );
}
