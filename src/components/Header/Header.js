import React, { Component } from "react";
import { ReactComponent as Logo } from "../../assets/sample.logo.svg";
import { ReactComponent as Notification } from "../../assets/notification.svg";
import { Link } from "react-router-dom";
import "./Header.scss";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav class="c-header">
        <div class="c-header__wrapper">
          <Link to="/">
            <Logo />
          </Link>
          <span className="c-header__wrapper--list">거래소</span>
          <span className="c-header__wrapper--list">충전소</span>
          <span className="c-header__wrapper--list">고객센터</span>
          <Notification />
          <div className="c-header__wrapper--signup">회원가입</div>
          <div className="c-header__wrapper--signin">로그인</div>
        </div>
      </nav>
    );
  }
}

export default Header;