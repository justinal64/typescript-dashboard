import * as React from "react";

export interface Props {
  name?: string;
  enthusiasmLevel?: number;
}

class Button extends React.Component<Props, object> {
  public render() {
    // const { name, enthusiasmLevel = 1 } = this.props;

    // if (enthusiasmLevel <= 0) {
    //   throw new Error("You could be a little more enthusiastic. :D");
    // }

    return <div>Welcome to the button page</div>;
  }
}

export default Button;

// helpers

// function getExclamationMarks(numChars: number) {
//   return Array(numChars + 1).join("!");
// }
