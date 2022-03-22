/* scrimba */

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="katie zaferes" className="card--image" />
            <div className="card--rating">
              <img src="./images/star.png" alt="star" className="card--star" />
              <span>&nbsp; {props.rating}</span>
              <span className="light-text">&nbsp;({props.ratings}) •&nbsp;</span>
              <span className="light-text">{props.country}</span>
            </div>
            <p>{props.activity}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}