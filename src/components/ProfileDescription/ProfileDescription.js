import React, { Component } from "react";
import * as User from "../../lib/auth";
import "./ProfileDescription.scss";

class ProfileDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      credit: 0,
      elec: 0
    };
  }

  componentDidMount() {
    User.Check({
      token: localStorage.getItem("charger-token")
    }).then(res => {
      this.setState({
        name : res.data.name,
        email : res.data.email,
        phone : res.data.phone.substr(0,3) + "-" + res.data.phone.substr(3,4) +"-"+ res.data.phone.substr(7,11),
        credit : res.data.credit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        elec : res.data.electricity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      });
    });
  }
  render() {
    return (
      <div className="c-profiledesc">
        <div className="c-profiledesc__wrapper">
          <div className="c-profiledesc__wrapper--userbox">
            <div className="c-profiledesc__wrapper--userbox__greeting">
              <span className="c-profiledesc__wrapper--userbox__greeting--customer">
                {this.state.name} 님
              </span>
              <span className="c-profiledesc__wrapper--userbox__greeting--withcharger">
                Charger 서비스를 이용해주셔서 감사합니다!
              </span>
            </div>

            <div className="c-profiledesc__wrapper--userbox__infowrapper">
              <div className="c-profiledesc__wrapper--userbox__infowrapper--myprofile">
                <div className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo">
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo--email">
                    이메일
                  </span>
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo--useremail">
                    {this.state.email}
                  </span>
                </div>

                <div className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo">
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo--name">
                    이름
                  </span>
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo--username">
                    {this.state.name}
                  </span>
                </div>

                <div className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo">
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo--phone">
                    휴대폰
                  </span>
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo--userphone">
                    {this.state.phone}
                  </span>
                </div>
              </div>

              <div className="c-profiledesc__wrapper--userbox__infowrapper--remainbox">
                <div
                  className="c-mywallet__wrapper--userbox__infowrapper--remainbox__item"
                  style={{ marginBottom: "15px" }}
                >
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--remainbox__item--desc">
                    현재 잔액
                  </span>
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--remainbox__item--elec">
                    {this.state.credit} 원
                  </span>
                </div>

                <div className="c-mywallet__wrapper--userbox__infowrapper--remainbox__item">
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--remainbox__item--desc">
                    남은 전력
                  </span>
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--remainbox__item--elec">
                    {this.state.elec} KW
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileDescription;
