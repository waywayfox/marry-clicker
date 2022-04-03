import { Component } from "react";
import { Button, Radio, Space, Row } from 'antd';


const PurchaseMode = {
  PURCHASE: 1,
  SALE: -1
};

const AmountMode = {
  ONE: 1,
  TEN: 10,
  HUNDRED: 100,
  ALL: 5000
};

const BuildingsName = [
  {
    name: "mochitsuki",
    id: 0
  },
  {
    name: "marry hamustar",
    id: 1
  },
  {
    name: "game",
    id: 2
  },
  {
    name: "chat",
    id: 3
  },
  {
    name: "case",
    id: 4
  },
  {
    name: "ASMR",
    id: 5
  },
  {
    name: "TV",
    id: 6
  },
  {
    name: "gorvement",
    id: 7
  },
  {
    name: "faith",
    id: 8
  },
  {
    name: "sinri",
    id: 9
  },
  {
    name: "gerne",
    id: 10
  },
  {
    name: "spaceship",
    id: 11
  },
  {
    name: "clone machine",
    id: 12
  },
  {
    name: "portal",
    id: 13
  },
  {
    name: "time machine",
    id: 14
  },
  {
    name: "unknown1",
    id: 15
  },
  {
    name: "unknown2",
    id: 16
  },
  {
    name: "unknown3",
    id: 17
  }
];


class PurchasePanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      purchaseMode: PurchaseMode.PURCHASE,
      amountMode: AmountMode.ONE
    }
  }

  handlePurchaseModeChange = (e) => {
    this.setState({ purchaseMode: e.target.value });
    if (this.state.amountMode === AmountMode.ALL)
    {
      this.setState({amountMode: AmountMode.ONE });
    }
  }

  handleAmountChange = (e) => {
    this.setState({ amountMode: e.target.value });
  }

  handleButtonClick = (e) => {
    const id = e.currentTarget.id;
    const amount = this.state.purchaseMode * this.state.amountMode;
    this.props.setBuildingAmount(id, amount);
  }


  render() {
    const buttons = BuildingsName.map((item, i) => {
      return (
        <Button id={item.id} key={item.id} block onClick={this.handleButtonClick}>
          { item.name + ": " + String(this.props.buildingList[item.id])}
        </Button>
      )
    });

    return (
      <>
      {/***
        select purchase or sales, and the amount, 1, 10, 100, all(only for sales)
      ***/}
        <Row>
          <Radio.Group onChange={this.handlePurchaseModeChange} value={this.state.purchaseMode}>
            <Space direction="vertical">
              <Radio.Button value={PurchaseMode.PURCHASE}>BUY</Radio.Button>
              <Radio.Button value={PurchaseMode.SALE}>Sales</Radio.Button>
            </Space>
          </Radio.Group>
          <Radio.Group value={this.state.amountMode} onChange={this.handleAmountChange}>
            <Radio.Button value={ AmountMode.ONE }>1</Radio.Button>
            <Radio.Button value={ AmountMode.TEN }>10</Radio.Button>
            <Radio.Button value={ AmountMode.HUNDRED }>100</Radio.Button>
            {this.state.purchaseMode === PurchaseMode.SALE && <Radio.Button value={ AmountMode.ALL }>All</Radio.Button> }
          </Radio.Group>
        </Row>
        <Row>
          <Space direction="vertical">
            {buttons}
          </Space>
        </Row>
      </>

    );
  }
}


export default PurchasePanel;
