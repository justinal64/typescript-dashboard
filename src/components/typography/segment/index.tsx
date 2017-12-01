import * as React from "react";

export interface Props {
  font?: number;
  title: string;
}

class Segment extends React.Component<Props, object> {
  public render() {
    const { font, title } = this.props;

    return (
      <div>
        Segment
        {title}
        {font}
      </div>
    );
  }
}

export default Segment;
