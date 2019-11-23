import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
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

  onSubmitLogin = (logined) => {
    const { isLogined } = this.props;

    isLogined(logined);
  };

  onClickChangeMenu = (menu) => {
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
        console.log(result);
        localStorage.setItem("charger-token", result.data.token);
        this.onClickChangeMenu('main')
        this.onSubmitLogin(true)
      })
      .catch(result => {
        console.log("실패");
      });
  };

  render() {
    console.log(this.props);
    

    return (
      <div className="c-signin">
        <div className="c-signin__wrapper">
          <h1>로그인</h1>
          <p>고객님의 소중한 정보를 위해 주소창을 체크해주세요</p>
          <div className="c-signin__wrapper--info"></div>
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
              비밀번호 찾기
            </span>
            <span className="c-signin__wrapper--desc__regist"
            onClick={() => this.onClickChangeMenu("register")}>
              회원가입
            </span>
          </div>
        </div>
        <span className="c-signin__lock">
          혹시 해킹이 의심되는 상황인가요? 계정 잠금 >
        </span>
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
