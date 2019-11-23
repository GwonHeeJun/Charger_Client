import React, { Component } from "react";
import "./ProfileDescription.scss";

class ProfileDescription extends Component {
  render() {
    return (
      <div className="c-profiledesc">
        <div className="c-profiledesc__wrapper">
          <div className="c-profiledesc__wrapper--userbox">
            <div className="c-profiledesc__wrapper--userbox__greeting">
              <span className="c-profiledesc__wrapper--userbox__greeting--customer">
                고객님
              </span>
              <span className="c-profiledesc__wrapper--userbox__greeting--withcharger">
                Charger 서비스를 이용하신지 n일째입니다!
              </span>
            </div>

            <div className="c-profiledesc__wrapper--userbox__infowrapper">
              <div className="c-profiledesc__wrapper--userbox__infowrapper--myprofile">
                <div className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo">
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo--email">
                    이메일
                  </span>
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo--useremail">
                    skypedanny@naver.com
                  </span>
                </div>

                <div className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo">
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo--name">
                    이름
                  </span>
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo--username">
                    이대훈
                  </span>
                </div>

                <div className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo">
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo--phone">
                    휴대폰
                  </span>
                  <span className="c-profiledesc__wrapper--userbox__infowrapper--myprofile__userinfo--userphone">
                    010-2613-2274
                  </span>
                </div>
              </div>

              <div className="c-profiledesc__wrapper--userbox__infowrapper--remainbox">
                <span className="c-profiledesc__wrapper--userbox__infowrapper--remainbox__desc">
                  남은 전력
                </span>
                <span className="c-profiledesc__wrapper--userbox__infowrapper--remainbox__elec">
                    100kW
                </span>
              </div>
               
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileDescription;
