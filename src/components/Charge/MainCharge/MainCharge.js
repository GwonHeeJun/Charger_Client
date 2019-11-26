import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import {
  choosePaymentType,
  changeChargeNav,
  changeMenu
} from "../../../stores/Layout/Layout.store";
import * as Credit from "../../../lib/credit";
import "./MainCharge.scss";

// 카드, 무통장, 테스팅

class MainCharge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 1000
    };

    this.onClickChoosePaymentType = this.onClickChoosePaymentType.bind();
    this.onClickChangeMenu = this.onClickChangeMenu.bind();
  }

  onClickChangeMenu = menu => {
    const { changeMenu } = this.props;

    changeMenu(menu);
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  onClickChangeChargeNav = chargeNav => {
    const { changeChargeNav } = this.props;

    changeChargeNav(chargeNav);
  };

  onClickChoosePaymentType = (e, payment) => {
    const { choosePaymentType } = this.props;
    e.stopPropagation();

    choosePaymentType(payment);
  };

  onSubmit = e => {
    e.preventDefault();

    if (!localStorage.getItem("charger-token")) {
      alert("로그인 후 이용가능합니다.");
      this.onClickChangeMenu("signin");
      return 0;
    }

    if (this.state.price <= 0) {
      alert("올바르지 않은 금액입니다. 확인해주세요.");
      return 0;
    }

    Credit.ChargeCredit({
      credit_type: true,
      amount: this.state.price,
      payment_type: this.props.payment,
      token: localStorage.getItem("charger-token")
    })
      .then(result => {
        alert("충전이 완료되었습니다.");
        this.onClickChangeChargeNav("history");
      })
      .catch(result => {});
  };

  render() {
    const { payment } = this.props;
    return (
      <div className="c-main-charge">
        <div className="c-main-charge__header">
          <h2>KRW 입금</h2>
          <span>입금</span>
        </div>
        <div className="c-main-charge__type-list">
          <div
            className="c-main-charge__type-list--item"
            onClick={e => {
              this.onClickChoosePaymentType(e, 1);
            }}
          >
            <span className={payment === 1 ? "active" : ""}>카드</span>
          </div>
          <div
            className="c-main-charge__type-list--item"
            onClick={e => {
              this.onClickChoosePaymentType(e, 2);
            }}
          >
            <span className={payment === 2 ? "active" : ""}>휴대폰 결제</span>
          </div>
          <div
            className="c-main-charge__type-list--item"
            onClick={e => {
              this.onClickChoosePaymentType(e, 3);
            }}
          >
            <span className={payment === 3 ? "active" : ""}>무통장 입금</span>
          </div>
          <div
            className="c-main-charge__type-list--item"
            onClick={e => {
              this.onClickChoosePaymentType(e, 4);
            }}
          >
            <span className={payment === 4 ? "active" : ""}>테스트 결제</span>
          </div>
        </div>
        <div className="c-main-charge__input">
          <form
            onSubmit={this.onSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <TextField
              id="outlined-password-input"
              label="PRICE"
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.onChange}
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              helperText="금액 충전을 위한 입력"
              style={{ width: "75%" }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ width: "75%", marginTop: "50px" }}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    payment: state.layout.payment,
    chargeNav: state.layout.chargeNav,
    menu: state.layout.menu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    choosePaymentType: payment => dispatch(choosePaymentType(payment)),
    changeChargeNav: chargeNav => dispatch(changeChargeNav(chargeNav)),
    changeMenu: menu => dispatch(changeMenu(menu))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCharge);
