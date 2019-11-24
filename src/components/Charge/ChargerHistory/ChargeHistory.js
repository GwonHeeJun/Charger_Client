import React, { Component } from "react";
import * as User from '../../../lib/credit';
import "./ChargeHistory.scss";


export class ChargeHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history : []
    }
  }

  componentDidMount() {
    User.ChargeList({
      token : localStorage.getItem('charger-token')
    }).then(res => {
      this.setState({
        history: res.data.charge_list
      })
    })
  }
  render() {
    return (
      <div className="c-charge-his">
        <div className="c-charge-his__wrapper">
          <div className="c-charge-his__wrapper--header">
            <h2>거래기록</h2>
            <span>거래 내역</span>
          </div>
          <div className="c-charge-his__wrapper--content">
            <div className="c-charge-his__wrapper--content__type">
              <span className="item">시간</span>
              <span className="spacer" />
              <span className="item">현금 / 전력</span>
              <span className="spacer" />
              <span className="item">결제 방법</span>
              <span className="spacer" />
              <span className="item">가격</span>
            </div>
            <div className="c-charge-his__wrapper--content__list">
              {this.state.history.map((item, idx) => {
                let payment_type;
                switch (item.payment_type) {
                  case 1:
                    payment_type = "신용 카드";
                    break;
                  case 2:
                    payment_type = "휴대폰 결제";
                    break;
                  case 3:
                    payment_type = "무통장 입금";
                    break;
                  case 4:
                    payment_type = "테스트 결제";
                    break;
                  default:
                    break;
                }
                return (
                  <div>
                    <span className="item">{item.charged_at}</span>
                    <span className="spacer" />
                    <span className="item">
                      {item.credit_type === true ? "현금" : "전력"}
                    </span>
                    <span className="spacer" />
                    <span className="item">{payment_type}</span>
                    <span className="spacer" />
                    <span className="item">
                    {item.credit_type === true ? item.amount + " 원" : item.amount + " KW"}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChargeHistory;
