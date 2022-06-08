export default function HeaderItem (props) {
  return(
      <div className="current--course">
        <h1 className="current--course--name">
          {props.fromTo}
        </h1>
        <p className="current--course--value">
          {props.currentUSD}
        </p>
      </div>
  )
}