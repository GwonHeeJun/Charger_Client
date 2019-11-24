export const DEFAULT_ACTION = "DEFAULT_ACTION";
export const CHANGE_MENU = "CHANGE_MENU";
export const CHANGE_PROFILE = "CHANGE_PROFILE";
export const IS_LOGINED = "IS_LOGINED";
export const CHANGE_CHARGE_NAV = "CHANGE_CHARGE_NAV";
export const CHOOSE_PAYMENT_TYPE = "CHOOSE_PAYMENT_TYPE";


const initialState = {
  actions: "default",
  menu: "main",
  profile: "activity",
  logined : false,
  chargeNav : "input",
  payment : 1
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
 * logined : true       - 로그안 맞음
 *           false      - 로그인 아님
 * 
 * chargeNav : input    - 충전 
 *             history  - 기록
 * 
 * payment : 1       - 카드
 *           2      - 핸드폰
 *           3    - 계좌 입금
 *           4       - 테스트 결제
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
    case IS_LOGINED:
      return {
        ...state,
        logined : action.payload.logined
      }
    case CHANGE_CHARGE_NAV:
      return {
        ...state,
        chargeNav : action.payload.chargeNav
      }
    case CHOOSE_PAYMENT_TYPE:
      return {
        ...state,
        payment : action.payload.payment
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

export const isLogined = logined => ({
  type: IS_LOGINED,
  payload: {
    logined
  }
})

export const changeChargeNav = chargeNav => ({
  type: CHANGE_CHARGE_NAV,
  payload: {
    chargeNav
  }
})

export const choosePaymentType = payment => ({
  type: CHOOSE_PAYMENT_TYPE,
  payload: {
    payment
  }
})