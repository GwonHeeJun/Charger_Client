import React, { Component } from "react";
import * as Credit from "../../../lib/credit";
import "./HasCharger.scss";

class HasCharger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myPrice: 0
    };
  }

  componentDidMount() {
    Credit.GetMyAmount({
      token: localStorage.getItem("charger-token")
    })
      .then(res => {
        this.setState({
          myPrice : res.data.credit
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="c-has-charger">
        <div className="c-has-charger__wrapper">
          <div className="c-has-charger__wrapper--money">
            <span>총 보유자산</span>
            <h2>{this.state.myPrice} 원</h2>
          </div>
          <div className="c-has-charger__wrapper--type">
            <span className="c-has-charger__wrapper--type__name">이름</span>
            <span className="c-has-charger__wrapper--type__spacer" />
            <span className="c-has-charger__wrapper--type__price">
              현재 자산
            </span>
          </div>
          <div className="c-has-charger__wrapper--list">
            <div className="c-has-charger__wrapper--list__krw">
              <div className="row">
                <div className="desc">
                  <span>KRW</span>
                </div>
                <div className="type">
                  <small>원화</small>
                </div>
              </div>
              <div className="have">
                <span>{this.state.myPrice} 원</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HasCharger;
