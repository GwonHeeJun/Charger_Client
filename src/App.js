import React, { Fragment } from "react";
import { hot } from "react-hot-loader";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// 컨테이너 모듈
import RepresentContainer from "./containers/RepresentContainer/RepresentContainer";

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
    {/* <Route exact path="/" component={MainContainer} /> */}
    <Route exact path="/represent" component={RepresentContainer} />
    {/* <Route exact path="/register" component={RegisterContainer} />
    <Route exact path="/main" component={Banner} />
    <Route exact path="/chargin" component={CharginContainer} />
    <Route exact path="/signin" component={SigninContainer} />
    <Route exact path="/mypage" component={MyPage} /> */}
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