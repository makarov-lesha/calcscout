import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Grid from "@material-ui/core/Grid";

import styles from "jss/pages/wipPageStyle.js";

const useStyles = makeStyles(styles);

export default function StartPage() {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <h2 className={classes.title}>Work in Progress</h2>
          <h5 className={classes.description}>
            Content of this page will appear soon. <br /> <br />
            We are working on it.
          </h5>
        </Grid>
      </Grid>
    </div>
  );
}
