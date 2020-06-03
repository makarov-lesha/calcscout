import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//components
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import logo from "assets/img/logo192.png";

//styles
import styles from "jss/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const { fluid, white } = props;
  var container = classnames({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
  });
  var anchor =
    classes.a +
    classnames({
      [" " + classes.whiteColor]: white,
    });
  var footerLinks = classnames({
    // [classes.block]: true,
    [classes.navLink]: true,
    [classes.whiteFooter]: white,
  });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <GridContainer
          direction={matchesXS ? "column" : "row"}
          justify="space-between"
          alignItems="center"
          
        >
          <GridItem classes={{ root: classes.footerPadding }}>
            <List className={classes.list}>
              <GridContainer justify="center" className={classes.footerGrid} >
                <GridItem className={classes.noPadding}>
                  <ListItem
                    className={classes.inlineBlock}
                    style={{
                      display: matchesXS ? "block" : "inline-block",
                      textAlign: matchesXS ? "center" : "left",
                    }}
                  >
                    <NavLink to={"/main/about"} className={footerLinks}>About</NavLink>
                  </ListItem>
                </GridItem>
                <GridItem className={classes.noPadding}>
                  <ListItem
                    className={classes.inlineBlock}
                    style={{
                      display: matchesXS ? "block" : "inline-block",
                      textAlign: matchesXS ? "center" : "left",
                    }}
                  >
                    <NavLink to={"/main/team"} className={footerLinks}>Team</NavLink>
                  </ListItem>
                </GridItem>
                <GridItem className={classes.noPadding}>
                  <ListItem
                    className={classes.inlineBlock}
                    style={{
                      display: matchesXS ? "block" : "inline-block",
                      textAlign: matchesXS ? "center" : "left",
                    }}
                  >
                    <NavLink to={"/main/contacts"} className={footerLinks}>Contacts</NavLink>
                  </ListItem>
                </GridItem>
              </GridContainer>
            </List>
          </GridItem>

          <GridItem>
            <p
              className={matchesXS ? classes.center : classes.right}
              style={{ paddingRight: 0 }}
            >
              &copy; {1900 + new Date().getYear()}{" "}
              <a href="/" className={anchor}>
                Calcscout 24
                <img
                  src={logo}
                  alt="Calcscout24 logo"
                  height={matchesSM ? "16px" : "16px"}
                  width={matchesSM ? "16px" : "16px"}
                  style={{ marginLeft: "0.2rem" }}
                />
              </a>
            </p>
          </GridItem>
        </GridContainer>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool,
};
