
/*!

=========================================================
* Material Dashboard PRO React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import MainLayout from "layouts/Main.js";
import CalcLayout from "layouts/Calc.js";

import "sass/material-dashboard-pro-react.scss";


const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Switch>
        <Route path="/main" component={MainLayout} />
        <Route path="/calculator" component={CalcLayout} />
        <Route path="/" component={MainLayout} />
        {/* <Redirect from="/" to="/main/start-page" /> */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

