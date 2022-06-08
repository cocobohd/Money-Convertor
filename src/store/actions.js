import { CHANGE_USD, CHANGE_EUR} from "../store/types"

export function setUSD (courseNowUSD) {
  return {
    type: CHANGE_USD,
    courseNowUSD
  }
}

export function setEUR (courseNowEUR) {
  return {
    type: CHANGE_EUR,
    courseNowEUR
  }
}