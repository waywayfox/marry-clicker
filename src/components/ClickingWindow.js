import React from 'react';

import { Button } from 'antd';




class ClickingWindow extends React.Component {
  constructor(props) {
    super(props);
    this.handleMochiClick = this.props.handleMochiClick.bind(this);
  }

  handleClick = () => {
      this.handleMochiClick();
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
        mochimochi
      </Button>
    );
  }
}

export default ClickingWindow;
