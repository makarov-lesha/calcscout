import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink, Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";

//components
import logo from "assets/img/logo192.png";

//styles
import styles from "jss/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesLarge = useMediaQuery(theme.breakpoints.up("sm"));

  const { fluid, white } = props;
  var container = classnames({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
    [classes.horizontalFooter]: matchesSM || matchesLarge,
    [classes.verticalFooter]: matchesXS,
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
        <List className={classes.list}>
          <ListItem className={classes.inlineBlock}>
            <NavLink to={"/main/about"} className={footerLinks}>
              About
            </NavLink>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <NavLink to={"/main/team"} className={footerLinks}>
              Team
            </NavLink>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
            <NavLink to={"/main/contacts"} className={footerLinks}>
              Contacts
            </NavLink>
          </ListItem>
        </List>

        <div>
          <p
            className={matchesXS ? classes.center : classes.right}
            style={{ paddingRight: 0 }}
          >
            &copy; {1900 + new Date().getYear()}{" "}
            <Link to="/" className={anchor}>
              Calcscout 24
              <img
                src={logo}
                alt="Calcscout24 logo"
                height={matchesSM ? "16px" : "16px"}
                width={matchesSM ? "16px" : "16px"}
                style={{ marginLeft: "0.2rem" }}
              />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool,
};
