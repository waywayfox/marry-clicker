import { Component } from "react";
import { Button } from 'antd';

import { cookieBasedNews } from './../newsPool.js'

class NewsPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNews: "Default News."
    };
    this.newsBuffer = ["default 1"];
    this.cookieBasedNewsLevel = 0;
    // the first element is macho, and secode element is 50 macho
    this.buildingBasedNewsLevel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.machoBasedNewsLevel = 0;
  }

  getRandomNews = () => {
    return cookieBasedNews[Math.floor(Math.random() * cookieBasedNews.length)];
  }


  updateNewsBuffer = () => {
    console.log("here3");
    while (this.newsBuffer.length < 30)
    {
      this.newsBuffer.push(this.getRandomNews());
    }

    console.log("here4", this.newsBuffer);
  }


  updateNewsText = () => {
    if (this.newsBuffer.length < 1)
    {
      this.updateNewsBuffer();
    }
    const newNews = this.newsBuffer.shift();
    this.setState({
      currentNews: newNews
    });

  }


  componentDidMount() {
    this.updateNewsBuffer();
    setInterval(this.updateNewsText, 5000);
  }

  render() {
    console.log("before render");
    return (
      <>
        {this.state.currentNews}
      </>
    );
  }
}


export default NewsPanel;


