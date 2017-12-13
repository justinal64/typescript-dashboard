import * as React from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getIcon } from "../../utils/helpers";
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
      <Ul>
        <Segment title="Dashboard" font={0.75} />
        <li>
          <Link to="/dashboard">{getIcon("puzzle-piece")}Dashboard</Link>
        </li>
        <Segment title="UI Elements" font={0.75} />
        {getIcon("puzzle-piece")}
        <Collapsible trigger="Components">
          <Li>
            {getIcon("puzzle-piece")}
            <Link to="/buttons" className="test">
              Buttons
            </Link>
          </Li>
          <Li>
            {getIcon("puzzle-piece")}
            <Link to="/socialbuttons">Social Buttons</Link>
          </Li>
          <Li>
            {getIcon("puzzle-piece")}
            <Link to="/Cards">Cards</Link>
          </Li>
          <Li>
            {getIcon("puzzle-piece")}
            <Link to="/modals">Modals</Link>
          </Li>
          <Li>
            {getIcon("puzzle-piece")}
            <Link to="/switches">Switches</Link>
          </Li>
          <Li>
            {getIcon("puzzle-piece")}
            <Link to="/tables">Tables</Link>
          </Li>
          <Li>
            {getIcon("puzzle-piece")}
            <Link to="/tabs">Tabs</Link>
          </Li>
        </Collapsible>
        {getIcon("check-square-o")}
        <Collapsible trigger="Forms">
          <Li>
            {getIcon("check-square-o")}
            <Link to="/basicforms">Basic Forms</Link>
          </Li>
          <Li>
            {getIcon("check-square-o")}
            <Link to="/advancedforms">Advanced Forms</Link>
          </Li>
          <Li>
            {getIcon("check-square-o")}
            <Link to="/texteditors">Text Editors</Link>
          </Li>
        </Collapsible>
        {getIcon("bolt")}
        <Collapsible trigger="Plugins">
          <Li>
            {getIcon("bolt")}
            <Link to="/loadingbuttons">Loading Buttons</Link>
          </Li>
          <Li>
            {getIcon("bolt")}
            <Link to="/spinners">Spinners</Link>
          </Li>
        </Collapsible>
        {getIcon("star")}
        <Collapsible trigger="Icons">
          <Li>
            {getIcon("star")}
            <Link to="/fontawesome">Font Awesome</Link>
          </Li>
          <Li>
            {getIcon("star")}
            <Link to="/simplelineicons">Simple Line Icons</Link>
          </Li>
        </Collapsible>
        {getIcon("pie-chart")}
        <Collapsible trigger="Charts">
          <Li>
            {getIcon("pie-chart")}
            <Link to="/barchart">Bar Chart</Link>
          </Li>
          <Li>
            {getIcon("pie-chart")}
            <Link to="/basicchart">Basic Chart</Link>
          </Li>
          <Li>
            {getIcon("pie-chart")}
            <Link to="/horizontalchart">Horizontal Chart</Link>
          </Li>
          <Li>
            {getIcon("pie-chart")}
            <Link to="/linechart">Line Chart</Link>
          </Li>
          <Li>
            {getIcon("pie-chart")}
            <Link to="/piechart">Pie Chart</Link>
          </Li>
          <Li>
            {getIcon("pie-chart")}
            <Link to="/simplelinechart">Simple Line Chart</Link>
          </Li>
          <Li>
            {getIcon("pie-chart")}
            <Link to="/socialmediachart">Social Media Chart</Link>
          </Li>
        </Collapsible>
        <Segment title="Extras" font={0.75} />
        {getIcon("star")}
        <Collapsible trigger="Pages">
          <Li>
            {getIcon("star")}
            <Link to="/login">Login</Link>
          </Li>
          <Li>
            {getIcon("star")}
            <Link to="/basicchart">Basic Chart</Link>
          </Li>
          <Li>
            {getIcon("star")}
            <Link to="/register">Register</Link>
          </Li>
          <Li>
            {getIcon("star")}
            <Link to="/error404">Error 404</Link>
          </Li>
          <Li>
            {getIcon("star")}
            <Link to="/error500">Error 500</Link>
          </Li>
        </Collapsible>
        {getIcon("window-close")}
        <Collapsible trigger="UI Kits">
          <Li>
            {getIcon("window-close")}
            <Link to="/invoicing">Invoicing</Link>
          </Li>
          <Li>
            {getIcon("window-close")}
            <Link to="/email">Email</Link>
          </Li>
        </Collapsible>
        <Segment title="Coming Soon" font={0.75} />
        <li>
          {getIcon("calculator")}
          <Link to="/widgets">Widgets</Link>
        </li>
      </Ul>
    </div>
  );
};

export default Navigation;
