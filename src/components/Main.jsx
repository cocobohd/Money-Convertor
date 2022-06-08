import React from "react"
import "../styles/main.css"
import { useSelector } from "react-redux"


export default function Main() {
  /////============================> REACT HOOKS
  const [from, setFrom] = React.useState(0)
  const [to, setTo] = React.useState(0)
  const fromInput = React.createRef()
  const toInput = React.createRef()
  const selectRefForFrom = React.createRef()
  const selectRefForTo = React.createRef()

  /////============================> REDUX GET STATE
  const currentUSD = useSelector(state => state.courseNowUSD)
  const currentEUR = useSelector(state => state.courseNowEUR)
  const currentUSDtoEUR = useSelector(state => state.courseNowUSDtoEUR)
  
  /////============================> CALCULATE CURRENT COURSES
  const currentUAHToUSD = 1 / currentUSD
  const currentUAHToEUR = 1 / currentEUR
  const currentEURToUSD = 1 / currentUSDtoEUR

  /////============================> CHANGE FUNCTION FOR FIRST INPUT
  const fromFunc = () => {
    const fromValue = fromInput.current.value ? parseInt(fromInput.current.value) : 1
    setFrom(fromValue)

    if (selectRefForFrom.current.value === "UAH" && selectRefForTo.current.value === "USD"){
      setTo((fromValue * currentUAHToUSD).toFixed(2))
    }
    if (selectRefForFrom.current.value === "UAH" && selectRefForTo.current.value === "EUR"){
      setTo((fromValue * currentUAHToEUR).toFixed(2))
    }
    if (selectRefForFrom.current.value === "UAH" && selectRefForTo.current.value === "UAH"){
      setTo(fromValue.toFixed(2))
    }

    if (selectRefForFrom.current.value === "USD" && selectRefForTo.current.value === "UAH"){
      setTo((fromValue * currentUSD).toFixed(2))
    }
    if (selectRefForFrom.current.value === "USD" && selectRefForTo.current.value === "EUR"){
      setTo((fromValue * currentUSDtoEUR).toFixed(2))
    }
    if (selectRefForFrom.current.value === "USD" && selectRefForTo.current.value === "USD"){
      setTo(fromValue.toFixed(2))
    }

    if (selectRefForFrom.current.value === "EUR" && selectRefForTo.current.value === "UAH"){
      setTo((fromValue * currentEUR).toFixed(2))
    }
    if (selectRefForFrom.current.value === "EUR" && selectRefForTo.current.value === "USD"){
      setTo((fromValue * currentUAHToEUR).toFixed(2))
    }
    if (selectRefForFrom.current.value === "EUR" && selectRefForTo.current.value === "EUR"){
      setTo(fromValue.toFixed(2))
    }
  }

  /////============================> CHANGE FUNCTION FOR SECOND INPUT
  const toFunc = () => {
    const toValue = parseInt(toInput.current.value)
    setTo(toValue)

    if (selectRefForTo.current.value === "UAH" && selectRefForFrom.current.value === "USD"){
      setFrom((toValue * currentUAHToUSD).toFixed(2))
    }
    if (selectRefForTo.current.value === "UAH" && selectRefForFrom.current.value === "EUR"){
      setFrom((toValue * currentUAHToEUR).toFixed(2))
    }
    if (selectRefForTo.current.value === "UAH" && selectRefForFrom.current.value === "UAH"){
      setFrom(toValue.toFixed(2))
    }

    if (selectRefForTo.current.value === "USD" && selectRefForFrom.current.value === "UAH"){
      setFrom((toValue * currentUSD).toFixed(2))
    }
    if (selectRefForTo.current.value === "USD" && selectRefForFrom.current.value === "EUR"){
      setFrom((toValue * currentUSDtoEUR).toFixed(2))
    }
    if (selectRefForTo.current.value === "USD" && selectRefForFrom.current.value === "USD"){
      setFrom(toValue.toFixed(2))
    }

    if (selectRefForTo.current.value === "EUR" && selectRefForFrom.current.value === "UAH"){
      setFrom((toValue * currentEUR).toFixed(2))
    }
    if (selectRefForTo.current.value === "EUR" && selectRefForFrom.current.value === "USD"){
      setFrom((toValue * currentEURToUSD).toFixed(2))
    }
    if (selectRefForTo.current.value === "EUR" && selectRefForFrom.current.value === "EUR"){
      setFrom(toValue.toFixed(2))
    }
  }

  /////============================> ON FOCUS FUNCTION FOR CLEAR INPUT
  const focus = (e) => {
    e.target.value = ""
  }

  return (
    <main className="main"> 
      <h1 className="main--title">
        Money Convertor
      </h1>
      <div className="main--divs">
        <div className="div--from">
          <input type="number" ref={fromInput} onChange={fromFunc} onFocus={focus} value={from}/>
          <select 
          className="select" 
          name="user_profile_color_1" 
          ref={selectRefForFrom}
          onChange={fromFunc}
          >
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="div--to">
          <input type="number" ref={toInput} onChange={toFunc} onFocus={focus} value={to}/>
          <select 
            className="select" 
            name="user_profile_color_1" 
            ref={selectRefForTo}
            onChange={toFunc}
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