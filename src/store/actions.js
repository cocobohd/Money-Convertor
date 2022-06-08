import { CHANGE_USD, CHANGE_EUR, CHANGE_USDTOEUR } from "../store/types"

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

export function setUSDtoEUR (courseNowUSDtoEUR) {
  return {
    type: CHANGE_USDTOEUR,
    courseNowUSDtoEUR
  }
}