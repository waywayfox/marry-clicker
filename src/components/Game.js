import React from 'react';
import { Row, Col, Layout, Button } from 'antd';
import { BUILDING_MAX, UpgradeMode, UpgradeDetailList } from './../const.js'


import ClickingWindow from './ClickingWindow.js'
import PurchasePanel from './PurchasePanel.js'
import UpgradePanel from './UpgradePanel.js'
import NewsPanel from './NewsPanel.js'


const { Header, Content } = Layout;

class Game extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      totalSubscriber: 2000000,
      subscriberPerSecond: 0,
      buildingList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      upgradeList: Array(730).fill(0)
    }
    this.baseSps = [0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.modifiedSps = null;
    this.buildingMultiplier = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    this.globalMultiplier = 1;
    this.subscriberperclick = 0;
  }


  /**
   * Name: handleMochiClick
   *
   * Description: handle the click button of mochiru.
   *
   */
  handleMochiClick = () => {//{{{
    this.setState((prevState, props) => ({
      totalSubscriber: prevState.totalSubscriber + this.subscriberperclick
    }))
  }//}}}

  /**
   * Name: updateSubscriber
   *
   * Description: update total subscriber per second.
   *
   */
  updateSubscriber = () => {//{{{
    this.setState((prevState, props) => ({
      totalSubscriber: prevState.totalSubscriber + this.state.subscriberPerSecond
    }))
  }//}}}

  /**
   * Name: calculateBaseSps
   *
   * Description: initailize baseSps and modifiedSps.
   *
   */
  calculateBaseSps = () => {//{{{
    for (let i = 1; i < BUILDING_MAX; i += 1)
    {
      let id = i;
      let base = Math.ceil((Math.pow(id * 1, id * 0.5 + 2)) * 10) / 10;
      let digits = Math.pow(10, (Math.ceil(Math.log(Math.ceil(base)) / Math.LN10))) / 100;
      base = Math.round(base / digits) * digits;
      this.baseSps[i] = base;
    }
    this.modifiedSps = this.baseSps.slice(0);
  }//}}}

  /**
   * Name: getThousandMochiBuildingCount
   *
   * Description: get the number of non-mochi buildings.
   *
   */
  getThousandMochiBuildingCount = () => {//{{{
    const currentBuildingList = this.state.buildingList.slice(0);
    let count =currentBuildingList.reduce((pre, cur) => pre + cur, 0);
    count = count - currentBuildingList[0];
    return count;
  }//}}}

  /**
   * Name: calculateSPC
   *
   * Description: calculate the subscriber per click, and update to the state
   *
   */
  calculateSPC = () => {//{{{
    let base = 1;
    let multiplier = 1;
    let currentUpgradeList = this.state.upgradeList.slice(0);
    if (currentUpgradeList[0] === UpgradeMode.OWNED) multiplier *= 2
    if (currentUpgradeList[1] === UpgradeMode.OWNED) multiplier *= 2
    if (currentUpgradeList[2] === UpgradeMode.OWNED) multiplier *= 2
    base = base * multiplier;

    if (currentUpgradeList[3] == UpgradeMode.OWNED)
    {
      let thousandMochiMultiplier = 1 + this.getThousandMochiBuildingCount() * 0.01;
      if (currentUpgradeList[4] === UpgradeMode.OWNED) thousandMochiMultiplier *= 5
      if (currentUpgradeList[5] === UpgradeMode.OWNED) thousandMochiMultiplier *= 10
      if (currentUpgradeList[6] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20
      if (currentUpgradeList[7] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20
      if (currentUpgradeList[8] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20
      if (currentUpgradeList[9] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20
      if (currentUpgradeList[10] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20
      if (currentUpgradeList[11] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20
      if (currentUpgradeList[12] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20
      if (currentUpgradeList[13] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20
      base = base + base * thousandMochiMultiplier;
    }

    this.subscriberperclick = base
  }//}}}

  /**
   * Name: recalculateMochiruMultiplier
   *
   * Description: recalculate thousand mochiru multiplier
   *              It should be called at tier upgrade and other building bought.
   *
   */
  recalculateMochiruMultiplier = () => {//{{{
    let thousandMochiMultiplier = 1;
    let currentUpgradeList = this.state.upgradeList.slice(0);
    if (currentUpgradeList[3] == UpgradeMode.OWNED)
    {
      thousandMochiMultiplier = 1 + this.getThousandMochiBuildingCount() * 0.01;
      if (currentUpgradeList[4] === UpgradeMode.OWNED) thousandMochiMultiplier *= 5;
      if (currentUpgradeList[5] === UpgradeMode.OWNED) thousandMochiMultiplier *= 10;
      if (currentUpgradeList[6] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20;
      if (currentUpgradeList[7] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20;
      if (currentUpgradeList[8] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20;
      if (currentUpgradeList[9] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20;
      if (currentUpgradeList[10] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20;
      if (currentUpgradeList[11] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20;
      if (currentUpgradeList[12] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20;
      if (currentUpgradeList[13] === UpgradeMode.OWNED) thousandMochiMultiplier *= 20;
    }
    this.buildingMultiplier[0] = thousandMochiMultiplier;
  }//}}}


  /**
   * Name: recalculateBuildingMultiplier
   *
   * Description update building's multiplier.
   *
   * @param {integer} buildingIndex      The index of building,
   *                                     if it is -1, it will update all building's multiplier.
   */
  recalculateBuildingMultiplier = (buildingIndex) => {
    // when index is -1, update all multiplier
    if (buildingIndex == -1)
    {
      let i = 2;
      for (i = 2; i < BUILDING_MAX; i++)
      {
        this.recalculateBuildingMultiplier(i);
      }
      return;
    }

    // calculate macho type
    let total = 1;
    if (buildingIndex === 2 && this.state.upgradeList[266] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 3 && this.state.upgradeList[267] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 4 && this.state.upgradeList[268] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 5 && this.state.upgradeList[269] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 6 && this.state.upgradeList[270] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 7 && this.state.upgradeList[271] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 8 && this.state.upgradeList[272] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 9 && this.state.upgradeList[273] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 10 && this.state.upgradeList[274] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 11 && this.state.upgradeList[275] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 12 && this.state.upgradeList[276] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 13 && this.state.upgradeList[277] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 14 && this.state.upgradeList[278] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 15 && this.state.upgradeList[279] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 16 && this.state.upgradeList[280] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 17 && this.state.upgradeList[281] ) total = total + this.state.buildingList[1] * 0.01;
    if (buildingIndex === 18 && this.state.upgradeList[282] ) total = total + this.state.buildingList[1] * 0.01;

    // TODO calculate synergy upgrade


    this.buildingMultiplier[buildingIndex] = total;
  }


  /**
   * Name: updateSPS
   *
   * Description: recalculate the global sps and update to the state.
   *
   */
  updateSPS = () => {//{{{
    let sps = 0;
    this.state.buildingList.forEach((count, index) => {
      sps += this.modifiedSps[index] * this.buildingMultiplier[index] * this.globalMultiplier * count
    });
    console.log("macho: ", this.modifiedSps[1]);
    console.log("this.buildingMultiplier[2]: ", this.buildingMultiplier[2]);
    console.log(sps);
    this.setState({
      subscriberPerSecond: sps
    });
  }//}}}



/*************************************************************************************************************
 *
 * Upgrade
 *
**************************************************************************************************************/

  /**
   * Name: unlockUpgrade
   *
   * Description set buildingList and add cost to totalSubscriber
   *
   * @param {integer} index           the upgrade id or a array of upgarde list.
   */
  // unlockUpgrade {{{
  unlockUpgrade = (index) => {
    const newList = this.state.upgradeList.slice(0);
    let needUpdate = 0
    console.log("index", index);
    if (typeof(index) == 'number')
    {
      if (newList[index] === UpgradeMode.LOCK)
      {
        newList[index] = UpgradeMode.UNLOCK;
        needUpdate = 1;
      }
    }
    else if (Array.isArray(index))
    {
      for (let i = 0; i < index.length; i++)
      {
        if (newList[index[i]] === UpgradeMode.LOCK)
        {
          newList[index[i]] = UpgradeMode.UNLOCK;
          needUpdate = 1;
        }
      }
    }

    if (needUpdate === 1)
    {
      this.setState({
        upgradeList: newList,
      });
    }
    return;
  }
  // }}}

  handleTieredUpgrade = (upgradeIndex) => {
    // don't update sps if the upgrade is thousandmochi related
    if (upgradeIndex >= 3 && upgradeIndex <= 13)
    {
      return;
    }
    let buildingIndex = Math.floor( upgradeIndex / 13 );
    this.modifiedSps[buildingIndex] = this.modifiedSps[buildingIndex] * 2;
    return;
  }


  handleMachoTypeUpgrade = (upgradeIndex) => {
    this.modifiedSps[1] = this.modifiedSps[1] * 2;
  }


  handleSynergyUpgrade = () => {



  }

  handleSubscriberTypeUpgrade = (upgradeIndex) => {

  }


  /**
   * Name: handleUpgradeEffect
   *
   * Description: handle the ipgrade effect after you but some upgrade
   *
   * @param {integer} index           the upgrade id.
   */
  handleUpgradeEffect = (upgradeIndex) => {//{{{
    // this function handldle three type of upgrade
    // (1) that will change building modified sps, ex tiered, grandma
    // (2) thath will change bulding multiplier, synergy
    // (3) thath will change global multiplier, cookie, kitten
    // TODO: finish other upgrade
    if (upgradeIndex >=0 && upgradeIndex <= 233)
    {
      // tiered upgrade
      this.handleTieredUpgrade(upgradeIndex);
    }
    else if (upgradeIndex >= 266 && upgradeIndex <= 282)
    {
      // marry macho type upgrade
      this.handleMachoTypeUpgrade(upgradeIndex);

    }
    else if (upgradeIndex >= 283 && upgradeIndex <= 314)
    {
      // synergy upgrade

    }
    else if (upgradeIndex >= 315 && upgradeIndex <= 518)
    {
      // cookie upgrade

    }

  }//}}}


  /**
   * Name: buyUpgrade
   *
   * Description: process the upgrade buying process, when the user click on the buyable upgrade
   *
   * @param {integer} upgradeIndex           the upgrade id.
   */
  buyUpgrade = (upgradeIndex) => {//{{{
    console.log("buy index: ", upgradeIndex)
    const newList = this.state.upgradeList.slice(0);
    let newTotal = this.state.totalSubscriber - UpgradeDetailList[upgradeIndex].price;
    newList[upgradeIndex] = UpgradeMode.OWNED;
    this.handleUpgradeEffect(upgradeIndex);

    this.setState({
      upgradeList: newList,
      totalSubscriber: newTotal
    }, () => {
      if (upgradeIndex >= 0 && upgradeIndex <= 13)
      {
        this.recalculateMochiruMultiplier();
        this.calculateSPC();
      }

      if (upgradeIndex >= 266 && upgradeIndex <= 282)
      {
        const machoUpgradeStart = 266;
        this.recalculateBuildingMultiplier(upgradeIndex - machoUpgradeStart + 2)
      }

      this.updateSPS();
    });

  }//}}}


  /**
   * Name: checkUpgradeUnlock
   *
   * Description: chekc if the new upgrade can be unlock when user buy new building.
   *
   * @param {integer} buildingIndex     the buliding id.
   * @param {integer} amount            building amout.
   */
  checkUpgradeUnlock = (buildingIndex, amount) => {//{{{
    let indexList = [];
    console.log(buildingIndex, amount);
    // check the tier upgrade
    if (buildingIndex == 0)
    {
      if (buildingIndex >= 1) indexList.push(0, 1);
      if (buildingIndex >= 10) indexList.push(2);
      if (buildingIndex >= 25) indexList.push(3);
      if (buildingIndex >= 50) indexList.push(4);
      if (buildingIndex >= 100) indexList.push(4);
      if (buildingIndex >= 150) indexList.push(6);
      if (buildingIndex >= 200) indexList.push(7);
      if (buildingIndex >= 250) indexList.push(8);
      if (buildingIndex >= 300) indexList.push(9);
      if (buildingIndex >= 350) indexList.push(10);
      if (buildingIndex >= 400) indexList.push(11);
      if (buildingIndex >= 450) indexList.push(12);
      if (buildingIndex >= 500) indexList.push(13);
    }
    else
    {
      let baseUpgradeID = 14 * buildingIndex;
      if (buildingIndex >= 1) indexList.push(baseUpgradeID);
      if (buildingIndex >= 5) indexList.push(baseUpgradeID + 1);
      if (buildingIndex >= 25) indexList.push(baseUpgradeID + 2);
      if (buildingIndex >= 50) indexList.push(baseUpgradeID + 3);
      if (buildingIndex >= 100) indexList.push(baseUpgradeID + 4);
      if (buildingIndex >= 150) indexList.push(baseUpgradeID + 5);
      if (buildingIndex >= 200) indexList.push(baseUpgradeID + 6);
      if (buildingIndex >= 250) indexList.push(baseUpgradeID + 7);
      if (buildingIndex >= 300) indexList.push(baseUpgradeID + 8);
      if (buildingIndex >= 350) indexList.push(baseUpgradeID + 9);
      if (buildingIndex >= 400) indexList.push(baseUpgradeID + 10);
      if (buildingIndex >= 450) indexList.push(baseUpgradeID + 11);
      if (buildingIndex >= 500) indexList.push(baseUpgradeID + 12);
      if (buildingIndex >= 550) indexList.push(baseUpgradeID + 13);
    }

    // marry macho upgrade
    if (buildingIndex >= 2 && amount >= 15 && this.state.buildingList[1] >= 1)
    {
      const machoUpgradeStart = 266;
      // minux 2 to fit the index, farm index is 2
      console.log(typeof buildingIndex)
      indexList.push(machoUpgradeStart + buildingIndex - 2);
    }
    else if (buildingIndex == 1)
    {
      const machoUpgradeStart = 266;
      let i = 2;
      for (i = 2; i < BUILDING_MAX; i++)
      {
        if (this.state.buildingList[i] >= 15)
        {
          indexList.push(machoUpgradeStart + i - 2);
        }
      }
    }


    this.unlockUpgrade(indexList);
  }//}}}


/*************************************************************************************************************
 *
 * Building
 *
*************************************************************************************************************/

  /**
   * Name: setBuildingAmount
   *
   * Description set buildingList and add cost to totalSubscriber
   *
   * @param {integer} index           index of buildingList.
   * @param {integer} count           amount of user buy or sell(negative).
   * @param {integer} cost            cost of buying or earn of selling.
   */
  setBuildingAmount = (index, count, cost) => {//{{{
    const newList = this.state.buildingList.slice(0);
    let newTotal = count > 0? this.state.totalSubscriber - cost: this.state.totalSubscriber + cost;
    newList[index] += count;
    if (newList[index] < 0)
    {
      newList[index] = 0;
    }
    this.checkUpgradeUnlock(parseInt(index), newList[index]);

    this.setState({
      buildingList: newList,
      totalSubscriber: newTotal
    },  ()=>{
      this.recalculateMochiruMultiplier();
      this.calculateSPC();
      this.recalculateBuildingMultiplier(-1);
      this.updateSPS();
    });

  }//}}}

  componentDidMount() {
    this.calculateBaseSps();
    setInterval(this.updateSubscriber, 1000);
  }



  render() {
    return (
      <>
        <Row wrap={false}>

          {/**Left part: clicking part and show current subscriber**/}
          <Col span={8}>
            <h1>{Math.floor( this.state.totalSubscriber )}</h1>
            <ClickingWindow subscriberperclick={this.state.subscriberperclick} handleMochiClick={this.handleMochiClick} />
          </Col>

          {/**Middle part: news, some buttons, and show the image for every upgrade**/}

          <Col span={8}>
            <Row>
              <Button>オプション</Button>
              <Button>記録</Button>
              <Button>情報</Button>
              <Button>遺産</Button>
              <NewsPanel />
            </Row>
            <Row>
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.
              middleYesterdayDay, my wife and I watched thethis filmmovie, For Here or To GoStart? atin our local San Francisco theaterhouse. SetMade in 2009, thethis filmmovie is one of the first bilingual filmsmovies to be nationally releasedissued inat the U.S. It tells the storytale of high-skilled immigrants and thethose challenges & emotions they goget through with their lives — from lovepassion, entrepreneurship, acceptancetolerance, assimilationabsorption and hatehatred. Depicting multiple generations, thethis filmmovie does a masterful jobwork of making people laugh, thinkbelieve and empathizeunderstand. This is athe rare entrepreneurial effortendeavor by first-time filmmakerproducer and full-time Gap employeeworker Rishi. In 2010, Rishi taughtlearnt himself screenwriting through Google and 7 years laterafter seesrealizes the fruits of his laborwork on 29 biglarge screens across thethis nationcountry. We couldwould n't be more proud of thisthe filmmovie, as it tellssays the immigrant story through athe lens seldomrarely seen — authenticgenuine and light-hearted.

            </Row>
          </Col>

          {/**Right part: upgrade pannel**/}
          <Col span={8} style={{ overflow: 'auto' }}>
            <UpgradePanel upgradeList={this.state.upgradeList} totalSubscriber={this.state.totalSubscriber} buyUpgrade={this.buyUpgrade}/>
            <PurchasePanel totalSubscriber={this.state.totalSubscriber} buildingList={this.state.buildingList} setBuildingAmount={this.setBuildingAmount} />
          </Col>
        </Row>
      </>
    )
  }
}

export default Game;
