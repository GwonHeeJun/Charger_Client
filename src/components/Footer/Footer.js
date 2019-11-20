import React, { Component } from "react";
import { ReactComponent as Logo } from '../../assets/Charger.svg';
import "./Footer.scss";

export class Footer extends Component {
  render() {
    return (
      <div className="place" >
        <div className="footWrap" style={{paddingTop: "20px", paddingBottom: "20px"}}>
          <div className="footCenter">
            <div className="foot_menu">
              <section className="_ng">
                <div className="group">
                  <div className="tit">Front-end</div>
                  <li className="list">권희준</li>
                  <li>김아련</li>
                  <li>이대훈</li>
                </div>
              </section>
              <section className="_ng">
                <div className="group">
                  <div className="tit">Designer</div>
                  <li>정수인</li>
                </div>
              </section>
              <section className="_ng">
                <div className="group">
                  <div className="tit">Back-end</div>
                  <li>정현문</li>
                </div>
              </section>
              <div className="na">
                <li>
                  <Logo style={{width: "200px",height: "50px"}} />
                </li>
              </div>
            </div>
            <div className="foot_address">
              <div className="foot-logo"></div>
              <div className="address">
                <p>광주광역시 소프트웨어 마이스터고등학교</p>
                <hr></hr>
              </div>
              <p>GWANGJU SOFTWARE MEISTER HIGH SCHOOL  _ CLUB SHA</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
