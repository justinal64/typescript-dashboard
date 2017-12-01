import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from "./screens/Login";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          {/* add navigation component here */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Login} />
          {/* <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
