import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

// import counter from "./Counter/Counter.store";
import layout from "./Layout/Layout.store";

const reducers = {
  layout
};

export default history =>
  combineReducers({
    router: connectRouter(history),
    ...reducers,
    layout
  });