import { Component } from "react";
import { Button, Radio, Space, Row } from 'antd';
import { BUILDING_MAX } from './../const.js'


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
    this.basePriceList = [15, 100, 500, 10000, 3000,
                          0, 0, 0, 40000, 200000,
                          1666666, 123456789, 3999999999, 75000000000, 77777777777,
                          12345678987654321, 12345678987654321, 12345678987654321];

  }

  componentDidMount() {
    this.calculateBasePrice();
  }

  calculateBasePrice = () => {

    for (let i = 1; i < BUILDING_MAX; i += 1)
    {
      let id = i;
      let base = (id * 1 + 9 + (id < 5? 0 : Math.pow(id-5, 1.75) * 5 )) * Math.pow(10, id) * (Math.max(1, id - 14));
      let digits = Math.pow(10, (Math.ceil(Math.log(Math.ceil(base)) / Math.LN10))) / 100;
      base = Math.round(base / digits) * digits;
      if (id >= 16) base *= 10;
      if (id >= 17) base *= 10;
      if (id >= 18) base *= 10;
      if (id >= 19) base *= 10;
      this.basePriceList[i] = base;
    }

  }


  calculatePrice = (index, amount) => {
    let price = 0;
    let base = this.basePriceList[index];
    let start = this.props.buildingList[index];
    for (let i = start; i < start + amount; i += 1)
    {
      price += base * Math.pow(1.15, i);
    }
    return Math.ceil(price);

  }

  calculateSalePrice = (index, amount) => {

    return 0;
  }

  convertPrice = (price) => {
    if (price < 1000000)
    {
      return String(price);
    }
    else
    {
      return price.toExponential(3);
    }

  }


  // click process
  // (1) check how many amount can it actually buy or sale
  // (2) update the state from Data: totalSubscriber and buildingList
  //

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


  /**
   * Description calculate buy result
   *
   * @param {integer} index           index of buildingList.
   * @return {object} Return a object with amount and cost.
   */
  calculateBuyResult = (index) => {
    const start = this.props.buildingList[index];
    const target = this.state.amountMode;
    let currentSubs = this.props.totalSubscriber;
    let amount = 0;
    let cost = 0;
    let base = this.basePriceList[index];
    console.log(currentSubs);
    for (let i = start; i < start + target; i += 1)
    {
      const currentPrice = base * Math.pow(1.15, i);
      if (currentSubs >= currentPrice)
      {
        amount += 1
        cost += currentPrice;
        currentSubs -= currentPrice;
      }
      else
      {
        break;
      }
    }
    return [amount, cost];
  }

  /**
   * Description calculate sell result
   *
   * @param {integer} index           index of buildingList.
   * @return {object} Return a object with amount and earn.
   */
  calculateSellResult = (index) => {

    return [0, 0];
  }

  /**
   * Description handle buy and sell
   */
  handleButtonClick = (e) => {
    const id = e.currentTarget.id;
    const clickResult = this.state.purchaseMode === PurchaseMode.PURCHASE? this.calculateBuyResult(id) : this.calculateSellResult(id);
    this.props.setBuildingAmount(id, clickResult[0], clickResult[1]);
  }


  render() {
    const buttons = BuildingsName.map((item, i) => {
      let price = this.state.purchaseMode == PurchaseMode.PURCHASE ? this.calculatePrice(item.id, this.state.amountMode) : this.calculateSalePrice();
      let priceString = this.convertPrice(price);
      return (
        <Button id={item.id} key={item.id} block onClick={this.handleButtonClick}>
          { item.name + ": " + priceString + " " + String(this.props.buildingList[item.id])}
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
