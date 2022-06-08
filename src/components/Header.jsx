import React from "react"
import "../styles/header.css"
import { useDispatch, useSelector } from "react-redux";
import { setUSD, setEUR } from "../store/actions"
import HeaderItem from "./HeaderItem";


export default function Header() {

  /////============================> REDUX GET, SET VALUES
  const dispatch = useDispatch()
  const currentUSD = useSelector(state => state.courseNowUSD)
  const currentEUR = useSelector(state => state.courseNowEUR)

  /////============================> GET COURSE FOR USD AND EUR
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
        currentUSD = {currentUSD.toFixed(2)}
      />
      <HeaderItem 
        fromTo = "EUR / UAH"
        currentUSD = {currentEUR.toFixed(2)}
      />
    </header>
  )
}