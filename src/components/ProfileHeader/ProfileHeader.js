import React, { Component } from "react";
import { connect } from "react-redux";
import { changeProfile } from "../../stores/Layout/Layout.store";
import "./ProfileHeader.scss";

class ProfileHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onClickChangeProfile = this.onClickChangeProfile.bind();
  }

  onClickChangeProfile = (e, profile) => {
    const { changeProfile } = this.props;
    e.stopPropagation();

    changeProfile(profile);
  };
  render() {
    const { profile } = this.props;
    return (
      <nav className="c-myheader">
        <div className="c-myheader__wrapper">
          <h1 className="c-myheader__wrapper--pagetitle">마이페이지</h1>
          <div className="c-myheader__wrapper--list">
            <span
              className={
                profile === "activity"
                  ? "c-myheader__wrapper--list__item-active"
                  : "c-myheader__wrapper--list__item"
              }
              onClick={e => this.onClickChangeProfile(e, "activity")}
            >
              나의 활동
            </span>
            <span
              className={
                profile === "management"
                  ? "c-myheader__wrapper--list__item-active"
                  : "c-myheader__wrapper--list__item"
              }
              onClick={e => this.onClickChangeProfile(e, "management")}
            >
              거래소 거래 내역
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.layout.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeProfile: profile => dispatch(changeProfile(profile))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
