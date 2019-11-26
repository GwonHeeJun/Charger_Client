import React, { Component } from "react";
import { isLogined, changeMenu } from "../../../stores/Layout/Layout.store";
import { connect } from "react-redux";
import * as Auth from "../../../lib/auth";
import "./Signin.scss";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      password: ""
    };

    this.onClickChangeMenu = this.onClickChangeMenu.bind();
    this.onSubmitLogin = this.onSubmitLogin.bind();
  }

  onSubmitLogin = logined => {
    const { isLogined } = this.props;

    isLogined(logined);
  };

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

  onSubmit = e => {
    e.preventDefault();
    Auth.Login({
      id: this.state.id,
      password: this.state.password
    })
      .then(result => {
        localStorage.setItem("charger-token", result.data.token);
        this.onClickChangeMenu("main");
        this.onSubmitLogin(true);
      })
      .catch(result => {
      });
  };

  render() {

    return (
      <div className="c-signin">
        <div className="c-signin__wrapper">
          <h1>로그인</h1>
          <p>고객님의 소중한 정보를 위해 주소창을 체크해주세요</p>
          {/* <div className="c-signin__wrapper--info">
            <div className="c-signin__wrapper--info__wrapper">
              <Lock />
              <span>https://domain.co.kr</span>
              <strong>자물쇠를 확인해주세요.</strong>
            </div>
          </div> */}
          <div style={{marginBottom: "70px"}}/>
          <form onSubmit={this.onSubmit}>
            <input
              name="id"
              type="id"
              placeholder="ID"
              value={this.state.id}
              onChange={this.onChange}
            />
            <input
              name="password"
              type="password"
              placeholder="PASSWORD"
              value={this.state.password}
              onChange={this.onChange}
            />
            <button type="submit">로그인</button>
          </form>
          <div className="c-signin__wrapper--desc">
            <span className="c-signin__wrapper--desc__findpw">
            </span>
            <span
              className="c-signin__wrapper--desc__regist"
              onClick={() => this.onClickChangeMenu("register")}
              style={{cursor: "pointer"}}
            >
              <span style={{
                color: "black"
              }}>계정이 없으신가요?</span> 회원가입
            </span>
          </div>
        </div>
        {/* <span className="c-signin__lock">
          혹시 해킹이 의심되는 상황인가요? 계정 잠금 >
        </span> */}
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
    isLogined: logined => dispatch(isLogined(logined))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
