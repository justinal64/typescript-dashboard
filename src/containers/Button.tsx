import * as React from "react";
import StyledButton from "../components/button/index";

export interface Props {
  name?: string;
  enthusiasmLevel?: number;
}

class Button extends React.Component<Props, object> {
  public render() {
    return (
      <div>
        <StyledButton title="test" icon={"puzzle-piece"} />
      </div>
    );
  }
}

export default Button;
