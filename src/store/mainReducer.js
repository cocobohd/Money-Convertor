import { CHANGE_USD, CHANGE_EUR} from "../store/types"

let defaultStore = {
  courseNowUSD: 0,
  courseNowEUR: 0
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
    default:
      return state
  }
}