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
            "00 : 00",
            "01 : 00",
            "02 : 00",
            "03 : 00",
            "04 : 00",
            "05 : 00",
            "06 : 00",
            "07 : 00",
            "08 : 00",
            "09 : 00",
            "10 : 00",
            "11 : 00",
            "12 : 00",
            "13 : 00",
            "14 : 00",
            "15 : 00",
            "16 : 00",
            "17 : 00",
            "18 : 00",
            "19 : 00",
            "20 : 00",
            "21 : 00",
            "22 : 00",
            "23 : 00",
            "24 : 00",

          ]
        }
      },
      series: [
        {
          data: [30, 40, 25, 50, 49, 21, 70, 51, 32, 34, 56, 43, 65, 12, 45, 56, 78, 34, 45, 56, 67, 78, 23, 34, 45]
        }
      ]
    };
  }

  render() {
    return (
      <div className="c-subheader">

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
                    KW당 600<small>2.00%</small>
                  </span>
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
