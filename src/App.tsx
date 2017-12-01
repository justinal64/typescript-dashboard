import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/navigation/index";
import Login from "./screens/Login";

import "./styles/layout.css";
class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          {/* add navigation component here */}
          <Navigation />

          <Route exact path="/" component={Login} />
          <Route path="/about" component={Login} />
          <Route path="/topics" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
