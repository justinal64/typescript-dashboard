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
        <StyledButton
          title="test"
          button="Secondary"
          icon="puzzle-piece"
          font={1.25}
        />
        <StyledButton
          title="test"
          button="Secondary"
          icon="puzzle-piece"
          font={1.25}
        />
        <StyledButton
          title="test"
          button="Secondary"
          icon="puzzle-piece"
          font={1.25}
        />
        <StyledButton
          title="test"
          button="Secondary"
          icon="puzzle-piece"
          font={1.25}
        />
      </div>
    );
  }
}

export default Button;
