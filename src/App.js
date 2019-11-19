import React, { Fragment } from "react";
import { hot } from "react-hot-loader";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// 컨테이너 모듈
import MainContainer from './containers/MainContainer/MainContainer';
import Banner from "./components/Modals/Banner/Banner";
import Signin from "./components/Auth/Signin/Signin";
import Register from "./components/Auth/Register/Register";
import Header from "./components/Header/Header";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ["NanumBarunGothic"].join(",")
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        "&$focused $notchedOutline": {
          borderColor: "#00004d"
        }
      }
    }
  }
});

const RoutesComponent = () => (
  <Fragment>
    <Route exact path="/" component={MainContainer} />
    <Route exact path="/main" component={Banner} />
    <Route exact path="/signin" component={Signin} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/header" component={Header} />
  </Fragment>
);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <RoutesComponent />
          </ConnectedRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default hot(module)(App);