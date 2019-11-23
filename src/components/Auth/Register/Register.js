import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as Auth from "../../../lib/auth";
import "./Register.scss";
import { changeMenu } from "../../../stores/Layout/Layout.store";
import { connect } from "react-redux";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      rePassword: "",
      id: "",
      name: "",
      phone: ""
    };
  }

  onClickChangeMenu = (menu) => {
    const { changeMenu } = this.props;

    changeMenu(menu);
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(value);
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.password !== this.state.rePassword) {
      alert("비밀번호 확인에 들어간 비밀번호가 다릅니다.");
      this.setState({
        password: "",
        rePassword: ""
      });
      return 0;
    }

    Auth.Register({
      id : this.state.id,
      password : this.state.password,
      name: this.state.name,
      email : this.state.email,
      phone: this.state.phone
    }).then(res => {
      console.log(res);
      this.onClickChangeMenu("signin")
    })
  };

  render() {
    return (
      <div className="c-register">
        <div className="c-register__title">
          <h1>회원가입</h1>
          <div className="c-register__title--list">
            <li className="c-register__title--list__type">
              <span className="c-register__title--list__type--num">1</span>
              <span className="c-register__title--list__type--title">
                정보 입력
              </span>
            </li>
          </div>
        </div>
        <div className="c-register__content">
          <form onSubmit={this.onSubmit}>
            <TextField
              id="outlined-password-input"
              label="Name"
              type="id"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              helperText="이름"
            />
            <TextField
              id="outlined-password-input"
              label="Phone Number"
              name="phone"
              type="text"
              value={this.state.phone}
              onChange={this.onChange}
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              helperText="전화번호"
              // style={{ marginBottom: "100px" }}
            />
            <TextField
              id="outlined-password-input"
              label="Email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              helperText="실제 수신이 가능한 이메일을 입력해주세요"
              // style={{ marginBottom: "100px" }}
            />
            <TextField
              id="outlined-password-input"
              label="Id"
              type="id"
              name="id"
              value={this.state.id}
              onChange={this.onChange}
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              helperText="아이디"
            />
            <TextField
              id="outlined-passw3eord-input"
              label="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              helperText="비밀번호"
            />
            <TextField
              id="outlined-password-input"
              label="Re-Password"
              type="password"
              value={this.state.rePassword}
              onChange={this.onChange}
              name="rePassword"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
              helperText="비밀번호 확인을 위한 재입력"
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "50px" }}
              type="submit"
            >
              Send
            </Button>
          </form>
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

export default connect(null, mapDispatchToProps)(Register);
