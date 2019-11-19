export const DEFAULT_ACTION = "DEFAULT_ACTION";

const initialState = {
  actions: "default"
};

/*********************************************
 *
 * actions : default - Default 구문입니다. 그냥 만든거에요.
 *
 *********************************************/

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return {
        ...state,
        actions: action.payload.actions
      };
    default:
      return state;
  }
}

export const actionDefault = actions => ({
  type: DEFAULT_ACTION,
  payload: {
    actions
  }
});