import { CHANGE_USD, CHANGE_EUR, CHANGE_USDTOEUR } from "../store/types"

let defaultStore = {
  courseNowUSD: 0,
  courseNowEUR: 0,
  courseNowUSDtoEUR: 0
}

export const mainReducer = (state = defaultStore, action) => {
  switch (action.type) {
    case CHANGE_USD: 
      return {
        ...state,
        courseNowUSD: action.courseNowUSD
      }
    case CHANGE_EUR: 
      return {
        ...state,
        courseNowEUR: action.courseNowEUR
      }
    case CHANGE_USDTOEUR:
      return {
        ...state,
        courseNowUSDtoEUR: action.courseNowUSDtoEUR
      }
    default:
      return state
  }
}