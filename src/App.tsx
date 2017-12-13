import * as React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navigation/index";
import Button from "./screens/Button";
import Login from "./screens/Login";
import "./styles/layout.css";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Grid>
          <Row className="around-lg around-md around-sm full_page">
            <Col className="logo" xs={12} sm={4} md={3} lg={2}>
              Logo Goes Here
            </Col>
            <Col className="header" xs={12} sm={8} md={9} lg={10}>
              Top Header
            </Col>
            <Col className="navigation" xs={12} sm={4} md={3} lg={2}>
              <Navigation />
            </Col>
            <Col className="full_page content" xs={12} sm={8} md={9} lg={10}>
              {/* Make a routes component? */}
              <Route exact path="/" component={Login} />
              <Route path="/about" component={Login} />
              <Route path="/topics" component={Login} />
              <Route path="/button" component={Button} />
            </Col>
          </Row>
        </Grid>
      </Router>
    );
  }
}

export default App;
