import * as React from "react";
import FontAwesome from "react-fontawesome";

const navColorScheme = {
  color: "#9faecb",
  marginLeft: ".50em",
  width: "20px",
  height: "20px",
  paddingRight: ".5em"
};

export const getIcon = (name: string) => {
  console.log(name);
  return <FontAwesome name={name} style={navColorScheme} />;
};

export default { getIcon };
