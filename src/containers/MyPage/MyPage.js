import React, { Component } from "react";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileDescription from "../../components/ProfileDescription/ProfileDescription";
import MyWallet from "../../components/MyWallet/MyWallet";
import { connect } from "react-redux";
import MarketHistory from "../../components/MarketHistory/MarketHistory";

class MyPage extends Component {
  render() {
    const { profile } = this.props;
    return (
      <>
        <ProfileHeader />
        {profile === "activity" ? (
          <>
            <ProfileDescription />
            <MyWallet />
          </>
        ) : (
          <MarketHistory />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.layout.profile
  };
};

export default connect(mapStateToProps, null)(MyPage);
