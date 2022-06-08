import React from "react"
import "../styles/header.css"
import { useDispatch, useSelector } from "react-redux";
import { setUSD, setEUR, setUSDtoEUR } from "../store/actions"
import HeaderItem from "./HeaderItem";

export default function Header() {

  /////============================> REDUX GET, SET VALUES
  const dispatch = useDispatch()
  const currentUSD = useSelector(state => state.courseNowUSD)
  const currentEUR = useSelector(state => state.courseNowEUR)
  const currentUSDtoEUR = useSelector(state => state.courseNowUSDtoEUR)

  /////============================> GET COURSE FOR USD TO EUR
  const getState = async () => {
    try {
      const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=O37xYyKSKC5GKZ5v0GSbLnyq4vp3Djor7WDhnuAN")
      const result = await response.text()
      const data = await JSON.parse(result).data
      dispatch(setUSDtoEUR(data.EUR.value))
    } catch (error) {
      console.error(error)
    }
  }
  getState()

  /////============================> GET COURSE FOR UAH TO EUR AND USD
  fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
    .then(response => response.text())
    .then(result => JSON.parse(result).forEach(item => {
      if (item.cc === "USD") {
        dispatch(setUSD(item.rate))
      }
      if (item.cc === "EUR") {
        dispatch(setEUR(item.rate))
      }
    }))
    .catch(error => console.log('error', error));

  return(
    <header className="header">
      <HeaderItem 
        fromTo = "USD / UAH"
        currentCourse = {currentUSD.toFixed(2)}
      />
      <HeaderItem 
        fromTo = "EUR / UAH"
        currentCourse = {currentEUR.toFixed(2)}
      />
      <HeaderItem 
        fromTo = "USD / EUR"
        currentCourse = {currentUSDtoEUR.toFixed(2)}
      />
    </header>
  )
}