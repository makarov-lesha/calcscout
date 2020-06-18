import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//routes
import routes from "routes.js";

//core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import Footer from "components/Footer/Footer.js";
import StartPage from "pages/StartPage.js";

//styles
import styles from "jss/layouts/mainStyle.js";

const useStyles = makeStyles(styles);

export default function Pages(props) {
  const { ...rest } = props;
  // ref for the wrapper div
  const wrapper = React.createRef();
  // styles
  const classes = useStyles();
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/main") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else if (prop.layout === "/zero") {
        return <Route path={prop.path} component={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };

  const getActiveRoute = (routes) => {
    let activeRoute = "CalculationScout 24";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  return (
    <div>
      <MainNavbar brandText={getActiveRoute(routes)} {...rest} />
      <div className={classes.wrapper} ref={wrapper}>
        <div className={classes.fullPage}>
          <Switch>
            {getRoutes(routes)}
            <Route path="/" component={StartPage} />
            <Redirect from="/main" to="/main/start-page" />
          </Switch>
          <Footer white />
        </div>
      </div>
    </div>
  );
}
