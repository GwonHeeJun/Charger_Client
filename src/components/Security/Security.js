import React, { Component } from "react";
import { ReactComponent as Logo } from "../../assets/Charger.svg";
import { Redirect } from "react-router-dom";
import "./Security.scss";
import SecurituBody from "./SecurityBody/SecurityBody";
import SecurityFooter from "./SecurityFooter/SecurityFooter";

class Security extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    for(let i = 0; i < 6; i++) {
      setTimeout(() => {
        this.setState({
          redirect : true
        })
      }, 5000);
    }
  }

  render() {
    if (this.state.redirect === true) {
      localStorage.setItem('is_checked', 'safe_ip')
      return <Redirect to="/main" />;
    }

    if (localStorage.getItem('is_checked')) {
      return <Redirect to="/main" />
    }

    return (
      <div class="box_wrapper" style={{marginTop: "100px"}}>
        <table
          class="table_wrapper"
          border="0"
          cellpadding="0"
          cellspacing="0"
          width="100%"
        >
          <thead>
            <td class="header_wrapper" align="text_center" valign="top">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                height="44"
                width="100%"
              >
                <tr>
                  <Logo style={{width: "200px",height: "50px"}}/>
                  <td align="right" valign="middle">
                    <p class="category">보안 검사</p>
                  </td>
                </tr>
              </table>
            </td>
          </thead>
          <tbody>
            <SecurituBody />
            <SecurityFooter />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Security;
