import * as React from "react";
import { SegmentWrapper, Subtitle } from "./styled";

export interface Props {
  font?: number; // ? = optional
  title: string; // no ? means required
}

class Segment extends React.Component<Props, object> {
  public render() {
    const { font, title } = this.props;

    return (
      <SegmentWrapper font={font}>
        <Subtitle>{title}</Subtitle>
      </SegmentWrapper>
    );
  }
}

export default Segment;
