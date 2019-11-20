import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./SubHeader.scss";

class SubHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        stroke: {
          curve: "smooth"
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: [
            "10/11",
            "10/12",
            "10/13",
            "10/14",
            "10/15",
            "10/16",
            "10/17",
            "10/18",
            "10/19"
          ]
        }
      },
      series: [
        {
          data: [30, 40, 25, 50, 49, 21, 70, 51]
        }
      ]
    };
  }

  render() {
    return (
      <div className="c-subheader">
        <div className="c-subheader__title">
          <div className="c-subheader__title--trade">
            <small>24시간 거래량(원)</small>
            <span>00,000백만</span>
          </div>
        </div>
        <div className="c-subheader__content">
          <div className="c-subheader__content--header">
            <span>최근 24시간 기준</span>
          </div>
          <div className="c-subheader__content--main">
            <div className="c-subheader__content--main__box">
              <div className="c-subheader__content--main__box--desc">
                <div className="c-subheader__content--main__box--desc__title">
                  <span>
                    KW
                    <small>전력</small>
                  </span>
                  <span id="price">
                    0,000,000<small>0.00%</small>
                  </span>
                  <span id="sell">VOL.00,000백만</span>
                  <span id="type">Main</span>
                </div>
                <div className="c-subheader__content--main__box--desc__content">
                  <div className="line">
                    <Chart
                      options={this.state.options}
                      series={this.state.series}
                      type="line"
                      width="100%"
                      height="300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubHeader;
