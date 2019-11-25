import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SecurityFooter.scss";

class SecurityFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td class="content_wrapper">
            <h2>Charger 팀 드림</h2>
            <h5 class="footer_slogan">
              The Electric Future, Charger
              <br />
              <Link to="#">https://domain.co.kr</Link>
            </h5>
          </td>
        </tr>
        <tr>
          <td class="footer_wrapper">
            <address>
              <b>(팀)Charger</b> | 광주광역시 광산구 상무대로 312
              | 대표 권희준
              <br />
              고객센터
              <Link to="#" title="새 창으로 열기">
                https://domain.co.kr
              </Link>{" "}
              | 전화 0000-0000 응답시간 00:00 ~ 00:00 (UTC+09)
              <br />
              <span class="copyright">
                © Charger Team. All rights reserved.
              </span>
            </address>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default SecurityFooter;
