import React, { Component } from "react";
import { ReactComponent as Charger } from "../../assets/Charger.svg";
import { ReactComponent as Notification } from "../../assets/notification.svg";
import { connect } from 'react-redux';
import { changeMenu } from '../../stores/Layout/Layout.store'
import { Link } from "react-router-dom";
import "./Header.scss";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onClickChangeMenu = this.onClickChangeMenu.bind();
  }

  onClickChangeMenu = (e, menu) => {
    const { changeMenu } = this.props;
    e.stopPropagation();

    changeMenu(menu)
  }

  render() {
    return (
      <nav class="c-header">
        <div class="c-header__wrapper">
          <span>
            <Charger onClick={e => this.onClickChangeMenu(e, "main")} />
          </span>
          <span className="c-header__wrapper--list" onClick={e => this.onClickChangeMenu(e, "exchange")}>거래소</span>
          <span className="c-header__wrapper--list" onClick={e => this.onClickChangeMenu(e, "chargin")}>충전소</span>
          <span className="c-header__wrapper--list" onClick={e => this.onClickChangeMenu(e, "customer")}>고객센터</span>
          <Notification />
          <div className="c-header__wrapper--signup" onClick={e => this.onClickChangeMenu(e, "register")}>회원가입</div>
          <div className="c-header__wrapper--signin" onClick={e => this.onClickChangeMenu(e, "signin")}>로그인</div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.layout.menu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeMenu: (menu) => dispatch(changeMenu(menu))
  }
}

export default connect( 
  mapStateToProps,
  mapDispatchToProps
)(Header)
