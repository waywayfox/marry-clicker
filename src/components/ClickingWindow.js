import React from 'react';

class ClickingWindow extends React.Component {
  constructor(props) {
    super(props);
    this.addTotolSubscriber = this.props.addTotolSubscriber.bind(this);
  }

  handleClick = () => {
      this.addTotolSubscriber(1);
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
