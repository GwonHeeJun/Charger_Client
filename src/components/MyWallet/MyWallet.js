import React, { Component } from "react";
import "./MyWallet.scss";
import { connect } from 'react-redux'
import { changeMenu, changeChargeNav } from '../../stores/Layout/Layout.store';

class MyWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onClickChangeMenu = this.onClickChangeMenu.bind();
    this.onClickChangeChargeNav = this.onClickChangeChargeNav.bind();
  }

  onClickChangeMenu = (menu) => {
    const { changeMenu } = this.props;

    changeMenu(menu);
  };

  onClickChangeChargeNav = (chargeNav) => {
    const { changeChargeNav } =this.props;

    changeChargeNav(chargeNav);
}

  render() {
    return (
      <div className="c-mywallet">
        <div className="c-mywallet__wrapper">
          <h2 className="c-mywallet__wrapper--subtitle">KRW 충전 내역</h2>
          <span
          onClick={ () => {
            this.onClickChangeMenu("chargin");
            this.onClickChangeChargeNav("history")
          }}
          > 충전 내역을 확인하시려면 클릭해주세요 </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.layout.menu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMenu: menu => dispatch(changeMenu(menu)),
    changeChargeNav: chargeNav => dispatch(changeChargeNav(chargeNav)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyWallet);
