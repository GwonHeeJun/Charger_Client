import React, { Component } from "react";
import { connect } from "react-redux";

import ChargeLeft from "./ChargeLeft/ChargeLeft";
import HasCharger from "./HasCharger/HasCharger";
import MainCharge from "./MainCharge/MainCharge";
import "./Charge.scss";
import ChargeHistory from "./ChargerHistory/ChargeHistory";

class Charge extends Component {
  render() {
    return (
      <div className="c-charge">
        <ChargeLeft />
        {this.props.chargeNav === "input" ? (
          <>
            <HasCharger />
            <MainCharge />
          </>
        ) : (
          <ChargeHistory />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chargeNav: state.layout.chargeNav
  };
};

export default connect(mapStateToProps, null)(Charge);
