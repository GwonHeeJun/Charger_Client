import React, { Component } from "react";
import "./SecurityBody.scss";

class SecurityBody extends Component {
  render() {
    return (
      <tr>
        <td class="content_wrapper">
          <h1>
            잠시만 기다려주세요
            <br />
            <small>PLEASE WAIT 5 SECONDS</small>
          </h1>

          <p>
            보안을 위해 브라우저를 확인중입니다.
            <br />
            이 과정은 자동으로 진행되며, 약 5초정도 소요됩니다.
            <br />
            기다리는 동안 <b>https://domain.co.kr</b> 주소를 꼭 확인해주세요.
          </p>
          <br />
          <div class="loading_wrapper">
            <div class="loading"></div>
          </div>

          <div class="cloudflare_box">
            <div class="cf-browser-verification cf-im-under-attack">
              <div id="cf-content" style={{ display: "block" }}>
                <div>
                  <div class="bubbles"></div>
                  <div class="bubbles"></div>
                  <div class="bubbles"></div>
                </div>
                <h1
                  style={{
                    color: "#666",
                    fontSize: "1.4em",
                    marginBottom: "10px"
                  }}
                >
                  <span>Checking your browser before accessing</span>{" "}
                  domain.co.kr
                </h1>

                <p>
                  This process is automatic. Your browser will redirect to your
                  requested content shortly.
                </p>
                <p>Please allow up to 5 seconds…</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default SecurityBody;
