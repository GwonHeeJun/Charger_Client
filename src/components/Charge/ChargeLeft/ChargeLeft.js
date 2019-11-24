import React, { Component } from "react";
import { changeChargeNav } from "../../../stores/Layout/Layout.store";
import { connect } from "react-redux";
import "./ChargeLeft.scss";

class ChargeLeft extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.onClickChangeChargeNav = this.onClickChangeChargeNav.bind();
    }

    onClickChangeChargeNav = (e, chargeNav) => {
        const { changeChargeNav } =this.props;
        e.stopPropagation();

        changeChargeNav(chargeNav);
    }
  render() {
      const {chargeNav } = this.props;
      console.log(chargeNav);
    return (
      <div className="c-charge-left">
        <div className="c-charge-left__navi" >
          <span className={chargeNav === "input" ? "c-charger-left__navi--item-active" : "c-charger-left__navi--item" } onClick={(e) => {this.onClickChangeChargeNav(e, "input")}}>충전</span>
          <span className={chargeNav === "history" ? "c-charger-left__navi--item-active" : "c-charger-left__navi--item" } onClick={(e) => {this.onClickChangeChargeNav(e, "history")}}>거래기록</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chargeNav: state.layout.chargeNav
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeChargeNav: chargeNav => dispatch(changeChargeNav(chargeNav))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChargeLeft);
