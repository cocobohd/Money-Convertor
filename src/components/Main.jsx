import React from "react"
import "../styles/main.css"
import { useSelector } from "react-redux"


export default function Main() {
  const [from, setFrom] = React.useState(0)
  const [to, setTo] = React.useState(0)
  const fromInput = React.createRef()
  const toInput = React.createRef()
  const selectRefForFrom = React.createRef()
  const selectRefForTo = React.createRef()

  const currentUSD = useSelector(state => state.courseNowUSD)
  const currentEUR = useSelector(state => state.courseNowEUR)

  const fromFunc = () => {
    const fromValue = parseInt(fromInput.current.value)
    const currentUAHToUSD = 1 / currentUSD
    const currentUAHToEUR = 1 / currentEUR
    

    setFrom(fromValue)
    if (selectRefForFrom.current.value === "UAH" && selectRefForTo.current.value === "USD"){
      setTo((fromValue * currentUAHToUSD).toFixed(2))
    }
    if (selectRefForFrom.current.value === "UAH" && selectRefForTo.current.value === "EUR"){
      setTo((fromValue * currentUAHToEUR).toFixed(2))
    }
  }

  const toFunc = () => {
    const toValue = parseInt(toInput.current.value)
    setTo(toValue)
    setFrom((toValue * currentUSD).toFixed(2))
  }

  return (
    <main className="main"> 
      <h1 className="main--title">
        Money Convertor
      </h1>
      <div className="main--divs">
        <div className="div--from">
          <input type="number" ref={fromInput} onChange={fromFunc} value={from}/>
          <select 
          className="select" 
          name="user_profile_color_1" 
          ref={selectRefForFrom}
          >
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="div--to">
          <input type="number" ref={toInput} onChange={toFunc} value={to}/>
          <select 
            className="select" 
            name="user_profile_color_1" 
            ref={selectRefForTo}
          >
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
    </main>
  )
}