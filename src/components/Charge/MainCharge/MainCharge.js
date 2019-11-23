import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./MainCharge.scss";

// 카드, 무통장, 테스팅

class MainCharge extends Component {
  render() {
    return (
      <div className="c-main-charge">
        <div className="c-main-charge__header">
          <h2>KRW 입출금</h2>
          <span>입금</span>
        </div>
        <div className="c-main-charge__type-list">
          <div className="c-main-charge__type-list--item">
            <span className="active">카드</span>
          </div>
          <div className="c-main-charge__type-list--item">
            <span>휴대폰 결제</span>
          </div>
          <div className="c-main-charge__type-list--item">
            <span>무통장 입금</span>
          </div>
          <div className="c-main-charge__type-list--item">
            <span>테스트 결제</span>
          </div>
        </div>
        <div className="c-main-charge__input">
          <TextField
            id="outlined-password-input"
            label="PRICE"
            type="password"
            name="rePassword"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            helperText="금액 충전을 위한 입력"
            style={{ width: "90%" }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ width: "90%", marginTop: "50px" }}
          >
            Send
          </Button>
        </div>
      </div>
    );
  }
}

export default MainCharge;
