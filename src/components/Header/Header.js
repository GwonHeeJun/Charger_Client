import React, { Component } from "react";
import { ReactComponent as Charger } from "../../assets/Charger.svg";
import { ReactComponent as Notification } from "../../assets/notification.svg";
import { connect } from "react-redux";
import { changeMenu, isLogined } from "../../stores/Layout/Layout.store";
import { ReactComponent as Signout } from "../../assets/Signout.svg";
import * as User from '../../lib/auth';
import { ReactComponent as Profile} from '../../assets/profile.svg'
import "./Header.scss";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      money: 0,
      elec: 0
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

  componentDidUpdate() {
    User.Check({
      token : localStorage.getItem('charger-token')
    }).then(res => {
      this.setState({
        money: res.data.credit,
        elec : res.data.electricity
      })
    })

  }

  // componentDidMount() {
  //   User.Check({
  //     token : localStorage.getItem('charger-token')
  //   }).then(res => {
  //     this.setState({
  //       money: res.data.credit,
  //       elec : res.data.electricity
  //     })
  //   })
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

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
          {/* <span
            className="c-header__wrapper--list"
            onClick={e => this.onClickChangeMenu(e, "customer")}
          >
            고객센터
          </span> */}
          <svg />
          {localStorage.getItem("charger-token") !== null || logined === true ? (
              <>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "20px",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <span style={{fontSize: "15px"}}>보유 전력 : <small>{this.state.elec} KW</small></span>
                  <span style={{fontSize: "15px"}}>보유 잔액 : <small>{this.state.money} 원</small></span>
                </div>
                <Profile
                  // src="https://image-public.coinone.co.kr/profile/img_profile.svg"
                  // width="35"
                  alt="user"
                  onClick={e => this.onClickChangeMenu(e, "profile")}
                  style={{
                    marginLeft: 0,
                    marginRight: 0,
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
