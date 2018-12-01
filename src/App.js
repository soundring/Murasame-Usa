import React from "react";
import { Router, Link, Route, Switch } from "react-static";
import styled, { injectGlobal } from "styled-components";
import { hot } from "react-hot-loader";
//
import Routes from "react-static-routes";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Page from "./components/pages/Page";
import About from "./containers/About";
import Home from "./containers/Home";

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <Router>
    <MuiThemeProvider>
      <Switch>
        <Routes />
      </Switch>
    </MuiThemeProvider>
  </Router>
);

export default App;
