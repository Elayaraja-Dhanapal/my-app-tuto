import React, { Component, Fragment } from "react";
import NavBar from "../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "../features/home/HomePage/HomePage";
import SettingsDashboard from "../features/user/Settings/SettingsDashboard";
import { TutoDetails } from "../features/dashboard/Tuto/TutoDetails";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage}></Route>
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Route path="/tuto" component={TutoDetails}></Route>
                <Route path="/settings" component={SettingsDashboard}></Route>
              </Container>
            </Fragment>
          )}
        ></Route>
      </Fragment>
    );
  }
}

export default App;
