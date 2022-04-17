import { Component } from "react";
import { Button, Popover, Space, Row } from 'antd';
import {UpgradeDetailList, UpgradeMode } from './../const.js'

class UpgradePanel extends Component {
  constructor(props){
    super(props);
  }


  handleUpgradeButtonClick = (e) => {
    const id = e.currentTarget.id;
    this.props.buyUpgrade(id);
  }


  getUpgradePopoverContent = (index) => {
    return (
      <p>
        {UpgradeDetailList[index].description + ": " + String(UpgradeDetailList[index].price)}
      </p>
    );

  }

  generateUpgradeButton = () => {
    return this.props.upgradeList.map((mode, i) => {
      if (mode !== UpgradeMode.UNLOCK)
      {
        return;
      }
      return (
        <Popover  key={i} title={UpgradeDetailList[i].title} content={this.getUpgradePopoverContent(i)}>
          <Button
            id={i}
            disabled={this.props.totalSubscriber < UpgradeDetailList[i].price}
            onClick={this.handleUpgradeButtonClick}
          >
            {UpgradeDetailList[i].title}
          </Button>
        </Popover>
      );
    });
  }

  render() {
    return (
      <>
        {this.generateUpgradeButton()}
      </>
    );
  }
}




export default UpgradePanel;
