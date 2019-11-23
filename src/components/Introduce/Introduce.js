import React, { Component } from "react";
import { ReactComponent as PayOnline } from "../../assets/payOnline.svg";
import "./Introduce.scss";

class Introduce extends Component {
  render() {
    return (
      <div
        className="c-introduce"
        style={{ backgroundColor: this.props.color }}
      >
        <div className="c-introduce__desc">
          <div className="c-introduce__desc--text">
            <span>
              개인간의 쉽고
              <br />
              <span>빠른 전력 거래</span>
            </span>
            <h2>전력거래소 _ Charger에서 시작하세요</h2>
          </div>
        </div>
        <div className="c-introduce__image">
          <PayOnline />
        </div>
      </div>
    );
  }
}

export default Introduce;
