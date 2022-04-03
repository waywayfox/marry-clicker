import React from 'react';
import { Row, Col } from 'antd';
import {BUILDING_MAX} from './../const.js'


import ClickingWindow from './ClickingWindow.js'
import PurchasePanel from './PurchasePanel.js'

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      totalSubscriber: 0,
      subscriberPerSecond: 0,
      buildingList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }


  addTotolSubscriber = (count) => {
    this.setState((prevState, props) => ({
      totalSubscriber: prevState.totalSubscriber + count
    }))
  }

  updateSubscriber = () => {
    this.setState((prevState, props) => ({
      totalSubscriber: prevState.totalSubscriber + this.state.subscriberPerSecond
    }))
  }

  updateSPS = (count) => {
    let sps = 0;
    this.state.buildingList.forEach((count, index) => {
      sps += ( index + 1 ) * count
    });
    console.log(sps);
    this.setState({
      subscriberPerSecond: sps
    });
  }

  setBuildingAmount = (index, count) => {
    const newList = this.state.buildingList.slice(0);
    newList[index] += count;
    if (newList[index] < 0)
    {
      newList[index] = 0;
    }
    this.setState({
      buildingList: newList
    }, this.updateSPS);
  }



  componentDidMount() {
    setInterval(this.updateSubscriber, 1000);
  }



  render() {
    return (
      <>
        <Row wrap={false}>
          {/**Left part: clicking part and show current subscriber**/}
          <Col span={8}>
            <h1>{this.state.totalSubscriber}</h1>
            <ClickingWindow addTotolSubscriber={this.addTotolSubscriber} />
          </Col>
          {/**Middle part: news, some buttons, and show the image for every upgrade**/}
          <Col span={8}>
            middle
          </Col>
          {/**Right part: upgrade pannel**/}
          <Col span={8}>
            <PurchasePanel buildingList={this.state.buildingList} setBuildingAmount={this.setBuildingAmount} />
          </Col>
        </Row>
      </>
    )
  }
}

export default Game;
