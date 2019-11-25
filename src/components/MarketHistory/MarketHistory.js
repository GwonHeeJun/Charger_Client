import React, { Component } from "react";
import * as Credit from "../../lib/credit";
import "./MarketHistory.scss";

class MarketHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buyList: [],
      sellList: []
    };
  }

  componentDidMount() {
    Credit.GetMarketHis({
      token: localStorage.getItem("charger-token")
    }).then(res => {
      this.setState({
        buyList: res.data.buy_list,
        sellList: res.data.sell_list
      });
      console.log(res.data.buy_list);
      console.log(res.data.sell_list);
    });
  }
  render() {
    return (
      <div className="c-market-his">
        <div className="c-market-his__buy">
          <h2>구매 내역</h2>
          <div className="c-market-his__buy--list">
            <span className="c-market-his__buy--list__type">시간</span>
            <span className="c-market-his__buy--list__spacer" />
            <span className="c-market-his__buy--list__type">구매 금액</span>
            <span className="c-market-his__buy--list__type">1KW 가격</span>
            <span className="c-market-his__buy--list__type">구매 전력</span>
          </div>
          <div className="c-market-his__buy--content">
            {this.state.buyList.map((item, idx) => {
              return (
                <div>
                  <span className="type">{item.traded_at}</span>
                  <span className="spacer" />
                  <span className="type">{item.price} 원</span>
                  <span className="type">
                    {item.price / item.electricity} 원
                  </span>
                  <span className="type">{item.electricity} KW</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="c-market-his__sell">
          <h2>판매 내역</h2>
          <div className="c-market-his__sell--list">
            <span className="c-market-his__sell--list__type">시간</span>
            <span className="c-market-his__sell--list__spacer" />
            <span className="c-market-his__sell--list__type">판매 금액</span>
            <span className="c-market-his__sell--list__type">1KW 가격</span>
            <span className="c-market-his__sell--list__type">판매 전력</span>
          </div>
          <div className="c-market-his__sell--content">
            {this.state.sellList.map((item, idx) => {
              return (
                <div>
                  <span className="type">{item.traded_at}</span>
                  <span className="spacer" />
                  <span className="type">{item.price} 원</span>
                  <span className="type">{item.price / item.electricity} 원</span>
                  <span className="type">{item.electricity} KW</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MarketHistory;
