import React, { Component } from "react";
import "./ProfileHeader.scss";

class ProfileHeader extends Component {
  render() {
    return (
      <nav className="c-myheader">
        <div className="c-myheader__wrapper">
          <h1 className="c-myheader__wrapper--pagetitle">마이페이지</h1>
          <div className="c-myheader__wrapper--list">
            <div className="c-myheader__wrapper--list__box-active">
              <span className="c-myheader__wrapper--list__box-active--item">
                나의 활동
              </span>
            </div>
            <div className="c-myheader__wrapper--list__box">
              <span className="c-myheader__wrapper--list__box--item">  
                개인정보 관리
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default ProfileHeader;
