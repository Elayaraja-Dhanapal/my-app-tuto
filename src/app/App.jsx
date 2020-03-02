import React, { Component, Fragment } from "react";
import NavBar from "../features/nav/navbar/NavBar";
import { Container } from "semantic-ui-react";
import HomePage from "../features/dashboard/homepage/HomePage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className="main">
          <HomePage />
        </Container>
      </Fragment>
    );
  }
}

export default App;
