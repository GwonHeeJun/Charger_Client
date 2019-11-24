import React, { Component } from "react";
import { ReactComponent as Charger } from "../../assets/Charger.svg";
import { ReactComponent as Notification } from "../../assets/notification.svg";
import { connect } from "react-redux";
import { changeMenu, isLogined } from "../../stores/Layout/Layout.store";
import { ReactComponent as Signout } from "../../assets/Signout.svg";
import "./Header.scss";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.onClickChangeMenu = this.onClickChangeMenu.bind();
    this.onClickUserLogout = this.onClickUserLogout.bind();
  }

  onClickChangeMenu = (e, menu) => {
    const { changeMenu } = this.props;
    // e.stopPropagation();

    changeMenu(menu);
  };

  onClickUserLogout = islogin => {
    const { isLogined } = this.props;

    isLogined(islogin);
  };

  render() {
    const { logined } = this.props;
    return (
      <nav className="c-header">
        <div className="c-header__wrapper">
          <span>
            <Charger onClick={e => this.onClickChangeMenu(e, "main")} />
          </span>
          <span
            className="c-header__wrapper--list"
            onClick={e => this.onClickChangeMenu(e, "exchange")}
          >
            거래소
          </span>
          <span
            className="c-header__wrapper--list"
            onClick={e => this.onClickChangeMenu(e, "chargin")}
          >
            충전소
          </span>
          <span
            className="c-header__wrapper--list"
            onClick={e => this.onClickChangeMenu(e, "customer")}
          >
            고객센터
          </span>
          <Notification />
          {localStorage.getItem("charger-token") !== null || logined === true ? (
              <>
                <img
                  src="https://image-public.coinone.co.kr/profile/img_profile.svg"
                  width="35"
                  alt="user"
                  style={{
                    cursor: "pointer"
                  }}
                />
                <Signout onClick={() => {
                  this.onClickUserLogout(false)
                  localStorage.removeItem('charger-token')
                  this.setState({
                    count: this.state.count + 1
                  })
                }} 
                />
              </>
            ) : (
            <>
              <div
                className="c-header__wrapper--auth"
                onClick={e => this.onClickChangeMenu(e, "register")}
              >
                회원가입
              </div>
              <div
                className="c-header__wrapper--auth"
                onClick={e => {
                  this.onClickChangeMenu(e, "signin");
                }}
              >
                로그인
              </div>
            </>
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.layout.menu,
    logined: state.layout.logined
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMenu: menu => dispatch(changeMenu(menu)),
    isLogined: logined => dispatch(isLogined(logined))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
