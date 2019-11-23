export const DEFAULT_ACTION = "DEFAULT_ACTION";
export const CHANGE_MENU = "CHANGE_MENU";
export const CHANGE_PROFILE = "CHANGE_PROFILE";

const initialState = {
  actions: "default",
  menu: "main",
  profile: "activity"
};

/*********************************************
 *
 * actions : default - Default 구문입니다. 그냥 만든거에요.
 * 
 * main    : main     - 메인화면
 *           chargin  - 충전소 화면
 *           exchange - 거래소 화면
 *           customer - 고객 센터
 *           signin   - 로그인 화면
 *           register - 회원기입 화면
 * 
 * profile : activity   - 나의 활동
 *           management - 개인정보 관리
 *
 *********************************************/

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return {
        ...state,
        actions: action.payload.actions
      };
    case CHANGE_MENU:
      return {
        ...state,
        menu: action.payload.menu
      }
    case CHANGE_PROFILE:
      return {
        ...state,
        profile: action.payload.profile
      }
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

export const changeMenu = menu => ({
  type: CHANGE_MENU,
  payload: {
    menu
  }
});

export const changeProfile = profile => ({
  type: CHANGE_PROFILE,
  payload: {
    profile
  }
});