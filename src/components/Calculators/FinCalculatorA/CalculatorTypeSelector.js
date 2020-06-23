import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import EuroIcon from "@material-ui/icons/Euro";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AvTimerIcon from "@material-ui/icons/AvTimer";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import { cardTitle } from "jss/material-dashboard-pro-react.js";

const styles = {
  cardTitle,
  pageSubcategoriesTitle: {
    color: "#3C4858",
    textDecoration: "none",
    textAlign: "center",
  },
  cardCategory: {
    margin: "0",
    color: "#999999",
  },
};

const useStyles = makeStyles(styles);

export default function PanelsDescriptive(props) {
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <h4 className={classes.pageSubcategoriesTitle}>
            Choose one option to proceed
          </h4>

          <NavPills
            color="info"
            alignCenter
            tabs={[
              {
                tabButton: "Check interest rate",
                tabIcon: AccountBalanceIcon,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Easily find effective interest rate for your loan
                      </h4>
                      <p className={classes.cardCategory}>
                        Just to be sure you know what you are doing
                      </p>
                    </CardHeader>
                    <CardBody>
                      Choose this option if you would like to find{" "}
                      <b>effective interest rate</b> of your loan.
                      <br />
                      <br />
                      This option may be interesting for you if you know{" "}
                      <b>the number of monthly payments</b> you are going to
                      make and the <b>size of each payment</b>.
                      <br />
                    </CardBody>
                  </Card>
                ),
              },
              {
                tabButton: "Optimal monthly payment",
                tabIcon: EuroIcon,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Easily estimate monthly payment to the bank
                      </h4>
                      <p className={classes.cardCategory}>
                        Just to be sure you know what you are doing
                      </p>
                    </CardHeader>
                    <CardBody>
                      Choose this option if you would like to find the amount of
                      <b>monthly payment</b> to the bank according to the
                      conditions of the loan you set.
                      <br />
                      <br />
                      This option may be interesting for you have idea about{" "}
                      <b>the interest rate</b> applied by the bank and{" "}
                      <b>period</b> for which you are taking the loan..
                    </CardBody>
                  </Card>
                ),
              },
              {
                tabButton: "Optimal repayment period",
                tabIcon: AvTimerIcon,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Easily estimate optimal repayment period for your loan
                      </h4>
                      <p className={classes.cardCategory}>
                        Just to be sure you know what you are doing
                      </p>
                    </CardHeader>
                    <CardBody>
                      Choose this option if you would like to find the repayment
                      period according to the conditions of the loan you set.
                      <br />
                      <br />
                      You will need to indicate <b>Loan amount</b>,{" "}
                      <b>Interest rate</b> and prefered <b>Monthly payment</b>.
                    </CardBody>
                  </Card>
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
