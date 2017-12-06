import * as React from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Segment from "../typography/segment/index";

const Ul = styled.ul`
  list-style-type: none;
  color: white;
  display: block;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0;
  font-size: 1.15em;
`;

const Li = styled.li`
  border-top: 1px solid black;
  background: #4f666e;
  &:hover {
    background: #657f89;
  }
`;
const Navigation = () => {
  return (
    <div>
      {/* <Segment title="Dashboard" font={1.5} /> */}
      {/* <Ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/about">About</Link>
        </Li>
        <Li>
          <Link to="/topics">Topics</Link>
        </Li>
      </Ul> */}
      <Ul>
        <Segment title="Dashboard" font={0.75} />
        <li>
          {/* {getIcon("puzzle-piece", navColorScheme)} */}
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <Segment title="UI Elements" font={0.75} />
        {/* {getIcon("puzzle-piece", navColorScheme)} */}
        <Collapsible trigger="Components">
          <Li>
            {/* {getIcon("puzzle-piece", navColorScheme)} */}
            <Link to="/buttons" className="test">
              Buttons
            </Link>
          </Li>
          <Li>
            {/* {getIcon("puzzle-piece", navColorScheme)} */}
            <Link to="/socialbuttons">Social Buttons</Link>
          </Li>
          <Li>
            {/* {getIcon("puzzle-piece", navColorScheme)} */}
            <Link to="/Cards">Cards</Link>
          </Li>
          <Li>
            {/* {getIcon("puzzle-piece", navColorScheme)} */}
            <Link to="/modals">Modals</Link>
          </Li>
          <Li>
            {/* {getIcon("puzzle-piece", navColorScheme)} */}
            <Link to="/switches">Switches</Link>
          </Li>
          <Li>
            {/* {getIcon("puzzle-piece", navColorScheme)} */}
            <Link to="/tables">Tables</Link>
          </Li>
          <Li>
            {/* {getIcon("puzzle-piece", navColorScheme)} */}
            <Link to="/tabs">Tabs</Link>
          </Li>
        </Collapsible>
        {/* {getIcon("check-square-o", navColorScheme)} */}
        <Collapsible trigger="Forms">
          <Li>
            {/* {getIcon("check-square-o", navColorScheme)} */}
            <Link to="/basicforms">Basic Forms</Link>
          </Li>
          <Li>
            {/* {getIcon("check-square-o", navColorScheme)} */}
            <Link to="/advancedforms">Advanced Forms</Link>
          </Li>
          <Li>
            {/* {getIcon("check-square-o", navColorScheme)} */}
            <Link to="/texteditors">Text Editors</Link>
          </Li>
        </Collapsible>
        {/* {getIcon("bolt", navColorScheme)} */}
        <Collapsible trigger="Plugins">
          <Li>
            {/* {getIcon("bolt", navColorScheme)} */}
            <Link to="/loadingbuttons">Loading Buttons</Link>
          </Li>
          <Li>
            {/* {getIcon("bolt", navColorScheme)} */}
            <Link to="/spinners">Spinners</Link>
          </Li>
        </Collapsible>
        {/* {getIcon("star", navColorScheme)} */}
        <Collapsible trigger="Icons">
          <Li>
            {/* {getIcon("star", navColorScheme)} */}
            <Link to="/fontawesome">Font Awesome</Link>
          </Li>
          <Li>
            {/* {getIcon("star", navColorScheme)} */}
            <Link to="/simplelineicons">Simple Line Icons</Link>
          </Li>
        </Collapsible>
        {/* {getIcon("pie-chart", navColorScheme)} */}
        <Collapsible trigger="Charts">
          <Li>
            {/* {getIcon("pie-chart", navColorScheme)} */}
            <Link to="/barchart">Bar Chart</Link>
          </Li>
          <Li>
            {/* {getIcon("pie-chart", navColorScheme)} */}
            <Link to="/basicchart">Basic Chart</Link>
          </Li>
          <Li>
            {/* {getIcon("pie-chart", navColorScheme)} */}
            <Link to="/horizontalchart">Horizontal Chart</Link>
          </Li>
          <Li>
            {/* {getIcon("pie-chart", navColorScheme)} */}
            <Link to="/linechart">Line Chart</Link>
          </Li>
          <Li>
            {/* {getIcon("pie-chart", navColorScheme)} */}
            <Link to="/piechart">Pie Chart</Link>
          </Li>
          <Li>
            {/* {getIcon("pie-chart", navColorScheme)} */}
            <Link to="/simplelinechart">Simple Line Chart</Link>
          </Li>
          <Li>
            {/* {getIcon("pie-chart", navColorScheme)} */}
            <Link to="/socialmediachart">Social Media Chart</Link>
          </Li>
        </Collapsible>
        <Segment title="Extras" font={0.75} />
        {/* {getIcon("star", navColorScheme)} */}
        <Collapsible trigger="Pages">
          <Li>
            {/* {getIcon("star", navColorScheme)} */}
            <Link to="/login">Login</Link>
          </Li>
          <Li>
            {/* {getIcon("star", navColorScheme)} */}
            <Link to="/basicchart">Basic Chart</Link>
          </Li>
          <Li>
            {/* {getIcon("star", navColorScheme)} */}
            <Link to="/register">Register</Link>
          </Li>
          <Li>
            {/* {getIcon("star", navColorScheme)} */}
            <Link to="/error404">Error 404</Link>
          </Li>
          <Li>
            {/* {getIcon("star", navColorScheme)} */}
            <Link to="/error500">Error 500</Link>
          </Li>
        </Collapsible>
        {/* {getIcon("window-close", navColorScheme)} */}
        <Collapsible trigger="UI Kits">
          <Li>
            {/* {getIcon("window-close", navColorScheme)} */}
            <Link to="/invoicing">Invoicing</Link>
          </Li>
          <Li>
            {/* {getIcon("window-close", navColorScheme)} */}
            <Link to="/email">Email</Link>
          </Li>
        </Collapsible>
        <li>
          {/* {getIcon("calculator", navColorScheme)} */}
          <Link to="/widgets">Widgets</Link>
        </li>
      </Ul>
    </div>
  );
};

export default Navigation;
