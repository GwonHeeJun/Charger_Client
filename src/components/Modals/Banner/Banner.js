import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="c-banner">
        <div className="c-banner__wrapper">
          <div className="c-banner__wrapper--header">
            <li>
              {/* <a>
                <div id="section1" />
              </a>
              <a>
                <div id="section2" />
              </a> */}
            </li>
          </div>
          <div className="c-banner__wrapper--footer">
            <Link id="a">오늘 하루 보지 않기</Link>
            <span id="b">닫기</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
