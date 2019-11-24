import React, { Component } from "react";
import SubHeader from "../../components/SubHeader/SubHeader";
import TemplateContainer from "../TemplateContainer/TemplateContainer";
import Introduce from "../../components/Introduce/Introduce";
import { connect } from "react-redux";
import Chargin from "../../components/Charge/Charge";
import Signin from "../../components/Auth/Signin/Signin";
import Register from "../../components/Auth/Register/Register";
import TradeMarket from "../../components/TradeMarket/TradeMarket";

class RepresentContainer extends Component {
  onChangePage = menu => {
    switch (menu) {
      case "main":
        return (
          <>
            <SubHeader />
            <Introduce />
            <Introduce color="blue" />
          </>
        )
      case "chargin":
          return (
            <Chargin />
          )
      case "exchange":
            return (
              <TradeMarket />
            )
      case "customer":
        break;
      case "signin":
        return <Signin />
      case "register":
        return <Register />
      default:
        return false;
    }
  };

  render() {
    const { menu } = this.props;
    return (
        <TemplateContainer>
            {this.onChangePage(menu)}
        </TemplateContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    menu: state.layout.menu
  };
};

export default connect(mapStateToProps, null)(RepresentContainer);
