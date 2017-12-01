import * as React from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import Segment from "../typography/segment/index";

const Navigation = () => {
  return (
    <div>
      <ul>
        <Segment title="Test" font={2.1} />
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
      <Collapsible trigger="Components">This is a test</Collapsible>
    </div>
  );
};

export default Navigation;
