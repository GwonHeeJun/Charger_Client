import React, { Component } from "react";
import "./Signin.scss";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(value);
  };

  onSubmit = e => {
    e.preventDefault();
    // AuthApi.localLogin(
    //     {
    //         id: this.state.id,
    //         password: this.state.password
    //     }
    // )
    // .then((result) => {
    //     console.log(result);
    //     localStorage.setItem('thiscode-token', result.data.token);
    //     this.props.userStore.Login();
    //     this.setState({ redirect: true });
    // })
    // .catch((result) => {
    //     console.log(result);
    //     console.log('실패');
    // });
  };

  render() {
    return (
      <div className="c-signin">
        <div className="c-signin__wrapper">
          <h1>로그인</h1>
          <p>고객님의 소중한 정보를 위해 주소창을 체크해주세요</p>
          <div className="c-signin__wrapper--info"></div>
          <form onSubmit={this.onSubmit}>
            <input
              name="email"
              type="id"
              placeholder="EMAIL"
              value={this.state.email}
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
            <span className="c-signin__wrapper--desc__findpw">비밀번호 찾기</span>
            <span className="c-signin__wrapper--desc__regist">회원가입</span>
          </div>
        </div>
        <span className="c-signin__lock">혹시 해킹이 의심되는 상황인가요? 계정 잠금 ></span>
      </div>
    );
  }
}

export default Signin;
