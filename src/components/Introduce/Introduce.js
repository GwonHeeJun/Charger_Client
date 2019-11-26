import React, { Component } from "react";
import { connect } from "react-redux";
import { changeMenu } from "../../stores/Layout/Layout.store";
import { ReactComponent as PayOnline } from "../../assets/payOnline.svg";
import "./Introduce.scss";

class Introduce extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onClickChangeMenu = (e, menu) => {
    const { changeMenu } = this.props;
    e.stopPropagation();

    changeMenu(menu);
  };

  render() {
    return (
      <div
        className="c-introduce"
        style={{ backgroundColor: this.props.color }}
      >
        <div className="c-introduce__desc">
          <div className="c-introduce__desc--text">
            <span>
              개인간의 쉽고
              <br />
              <span>빠른 전력 거래</span>
            </span>
            <h2>전력거래소 _ Charger에서 시작하세요</h2>
            <button onClick={e => this.onClickChangeMenu(e, "register")}>
              지금 가입하기
            </button>
          </div>
        </div>
        <div className="c-introduce__image">
          <PayOnline />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeMenu: menu => dispatch(changeMenu(menu))
  };
};

export default connect(null, mapDispatchToProps)(Introduce);
