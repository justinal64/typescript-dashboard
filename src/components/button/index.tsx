import * as React from "react";
import styled from "styled-components";
import { getIcon } from "../../utils/helpers";

const Button = styled.button`
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 0.75rem;
  line-height: 1.25;
  transition: all 0.15s ease-in-out;
  margin: 0.15em;
  background-color: transparent;
  font-size: ${(props: any) => (props.font ? props.font : ".75")}rem;
`;
/* display: ${props => (props.display ? displayBlock : "inline-block")};
${props => themePicker(props.inverted, props.button)};
${props => (props.disabled ? disabledButton : "")};  */

export interface Props {
  title: string;
  icon?: string;
  button?: string;
  // font?: float;
}

class StyledButton extends React.Component<Props, object> {
  public render() {
    const { title, icon, button } = this.props;
    const needIcon = icon ? getIcon(icon) : "";
    return (
      <Button
        button={button}
        title={title}
        // font={font}
        // inverted={inverted}
        // disabled={disabled}
        // display={block}
      >
        {needIcon}
        {title}
      </Button>
    );
  }
}

// const StyledButton = (props: any) => {
//   const { icon, title, font, inverted, disabled, block, button } = props;
//   const needIcon = icon ? getIcon(icon) : "";
//   return (
//     <Button
//       button={button}
//       title={title}
//       font={font}
//       inverted={inverted}
//       disabled={disabled}
//       display={block}
//     >
//       {needIcon}
//       {title}
//     </Button>
//   );
// };

export default StyledButton;
