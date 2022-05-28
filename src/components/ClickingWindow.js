import React from 'react';

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
      <button onClick={this.handleClick}>
        mochimochi
      </button>
    );
  }
}

export default ClickingWindow;
