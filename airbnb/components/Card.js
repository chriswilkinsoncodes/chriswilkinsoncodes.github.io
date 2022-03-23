/* scrimba */

function Card(props) {
  // console.log(props)
  return (
        <div className="card">
            <img src={props.card.img} alt="katie zaferes" className="card--image" />
            <div className="card--rating">
              <img src="./images/star.png" alt="star" className="card--star" />
              <span>&nbsp; {props.card.rating}</span>
              <span className="light-text">&nbsp;({props.card.ratings}) •&nbsp;</span>
              <span className="light-text">{props.card.country}</span>
            </div>
            <p>{props.card.activity}</p>
            <p><strong>From ${props.card.price}</strong> / person</p>
        </div>
    )
}