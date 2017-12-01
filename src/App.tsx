import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navigation from "./components/navigation/index";
import Login from "./screens/Login";

import "./styles/layout.css";
class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Grid>
            <Row className="around-lg around-md around-sm">
              <Col className="logo" xs={12} sm={12} md={2} lg={2}>
                Logo Goes Here
              </Col>
              <Col className="header" xs={12} sm={12} md={10} lg={10}>
                {/* <Navigation /> */}
                Top Header
              </Col>
              <Col className="navigation" xs={12} sm={12} md={2} lg={2}>
                Navigation
              </Col>
              <Col xs={12} sm={10} md={10} lg={10}>
                {/* Make a routes component? */}
                <Route exact path="/" component={Login} />
                <Route path="/about" component={Login} />
                <Route path="/topics" component={Login} />
              </Col>
            </Row>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
