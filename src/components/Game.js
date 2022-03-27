import React from 'react';
import ClickingWindow from './ClickingWindow.js'

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      totalSubscriber: 0,
      subscriberPerSecond: 0
    }
  }


  addTotolSubscriber = (count) => {
    this.setState((prevState, props) => ({
      totalSubscriber: prevState.totalSubscriber + count
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.totalSubscriber}</h1>
        <ClickingWindow addTotolSubscriber={this.addTotolSubscriber} />
      </div>
    )
  }
}

export default Game;
