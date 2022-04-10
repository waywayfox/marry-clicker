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
    this.baseSps = [0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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

  calculateBaseSps = () => {
    for (let i = 1; i < BUILDING_MAX; i += 1)
    {
      let id = i;
      let base = Math.ceil((Math.pow(id * 1, id * 0.5 + 2)) * 10) / 10;
      let digits = Math.pow(10, (Math.ceil(Math.log(Math.ceil(base)) / Math.LN10))) / 100;
      base = Math.round(base / digits) * digits;
      this.baseSps[i] = base;
    }
  }

  updateSPS = (count) => {
    let sps = 0;
    this.state.buildingList.forEach((count, index) => {
      sps += this.baseSps[index] * count
    });
    console.log(sps);
    this.setState({
      subscriberPerSecond: sps
    });
  }


  /**
   * Description set buildingList and add cost to totalSubscriber
   *
   * @param {integer} index           index of buildingList.
   * @param {integer} count           amount of user buy or sell(negative).
   * @param {integer} cost            cost of buying or earn of selling.
   */
  setBuildingAmount = (index, count, cost) => {
    const newList = this.state.buildingList.slice(0);
    let newTotal = count > 0? this.state.totalSubscriber - cost: this.state.totalSubscriber + cost;
    newList[index] += count;
    if (newList[index] < 0)
    {
      newList[index] = 0;
    }

    this.setState({
      buildingList: newList,
      totalSubscriber: newTotal
    }, this.updateSPS);
  }

  componentDidMount() {
    setInterval(this.updateSubscriber, 1000);
    this.calculateBaseSps();
  }



  render() {
    return (
      <>
        <Row wrap={false}>
          {/**Left part: clicking part and show current subscriber**/}
          <Col span={8}>
            <h1>{Math.floor( this.state.totalSubscriber )}</h1>
            <ClickingWindow addTotolSubscriber={this.addTotolSubscriber} />
          </Col>
          {/**Middle part: news, some buttons, and show the image for every upgrade**/}
          <Col span={8}>
            middle
          </Col>
          {/**Right part: upgrade pannel**/}
          <Col span={8}>
            <PurchasePanel totalSubscriber={this.state.totalSubscriber} buildingList={this.state.buildingList} setBuildingAmount={this.setBuildingAmount} />
          </Col>
        </Row>
      </>
    )
  }
}

export default Game;
