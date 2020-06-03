import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// @material-ui/icons
import MenuIcon from "@material-ui/icons/Menu";
import ApartmentIcon from "@material-ui/icons/Apartment";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import DescriptionIcon from "@material-ui/icons/Description";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ChevronRightSharpIcon from "@material-ui/icons/ChevronRightSharp";

// core components
import Button from "components/CustomButtons/Button";
import Logo from "assets/img/logo48.png";

//styles
import styles from "jss/components/mainNavbarStyle.js";

export default function MainNavbar(props) {
  const useStyles = makeStyles(styles);
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  const classes = useStyles();
  const { color, brandText } = props;
  const appBarClasses = classnames({
    [" " + classes[color]]: color,
  });

  var list = (
    <List
      className={classes.list}
      style={{ justifyContent: matchesSM ? "flex-start" : "flex-end" }}
    >
      <Hidden mdUp>
        <DialogTitle disableTypography className={classes.drawerHeader}>
          <IconButton color="default" onClick={handleDrawerToggle}>
            <ChevronRightSharpIcon style={{ color: "#fff" }} />
          </IconButton>
        </DialogTitle>
      </Hidden>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/main/real-estate"}
          className={classes.navLink}
          onClick={handleDrawerToggle}
        >
          <ApartmentIcon className={classes.listItemIcon} />
          <ListItemText
            primary={"Real Estate"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/main/financing"}
          onClick={handleDrawerToggle}
          className={classnames(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/main/financing"),
          })}
        >
          <BusinessCenterIcon className={classes.listItemIcon} />
          <ListItemText
            primary={"Financing"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/main/tax"}
          onClick={handleDrawerToggle}
          className={classnames(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/main/tax"),
          })}
        >
          <DescriptionIcon className={classes.listItemIcon} />
          <ListItemText
            primary={"Tax"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/calculator/dashboard"}
          onClick={handleDrawerToggle}
          className={classnames(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/calculator/dashboard"),
          })}
        >
          <DashboardIcon className={classes.listItemIcon} />
          <ListItemText
            primary={"DASHBOARDS"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
    </List>
  );
  return (
    <AppBar position="static" className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown>
          <div className={classes.flex}>
            <Button
              href="/"
              className={classes.title}
              color="transparent"
              style={{ alignItems: "baseline" }}
            >
              <img
                src={Logo}
                alt="Calcscout24 logo"
                height="24rem"
                width="24rem"
                style={{ marginRight: "0.5em" }}
              />
              {brandText}
            </Button>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.flex}>
            <Button
              href="/"
              className={classes.title}
              color="transparent"
              style={{ alignItems: "baseline" }}
            >
              <img
                src={Logo}
                alt="Calcscout24 logo"
                height="20rem"
                width="20rem"
                style={{ marginRight: "0.5em" }}
              />
              {brandText}
            </Button>
          </div>
        </Hidden>
        <Hidden smDown>{list}</Hidden>
        <Hidden mdUp>
          <Button
            className={classes.sidebarButton}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={"right"}
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {list}
            </Drawer>
          </Hidden>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

MainNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string,
};
