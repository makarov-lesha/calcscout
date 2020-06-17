import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import EuroIcon from "@material-ui/icons/Euro";
import HouseIcon from "@material-ui/icons/House";

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
        <GridItem xs={12} sm={8} md={8}>
          <h4 className={classes.pageSubcategoriesTitle}>
            Choose one option to proceed
          </h4>

          <NavPills
            color="info"
            alignCenter
            tabs={[
              {
                tabButton: "Consumer credit",
                tabIcon: EuroIcon,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Plan or Check conditions of you Consumer Credit
                      </h4>
                      <p className={classes.cardCategory}>
                        Just to be sure you know what you are doing
                      </p>
                    </CardHeader>
                    <CardBody>
                      Please choose this option if you apply for consumer credit
                      (i.e. normally cash) and would like to review the
                      conditions offered to you or plan in advance what you are
                      going to ask.
                      <br />
                      <br />
                      Calculator will help you to become aware of major
                      parameters of your loan.
                      <br />
                      <br />
                      Even if you have already aplied for financing, here you
                      wll be able to double check the conditions.
                    </CardBody>
                  </Card>
                ),
              },
              {
                tabButton: "Mortgage Financing",
                tabIcon: HouseIcon,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Plan or Check conditions of you Mortgage
                      </h4>
                      <p className={classes.cardCategory}>
                        Just to be sure you know what you are doing
                      </p>
                    </CardHeader>
                    <CardBody>
                      Please choose this option if you are planning to take a
                      mortgage.
                      <br />
                      It is important to be fully aware about the conditions
                      offered to you by the bank.
                      <br />
                      Even if you have already taken the mortgage, here you can
                      double-check your effective interest rate and other
                      parameters.
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
