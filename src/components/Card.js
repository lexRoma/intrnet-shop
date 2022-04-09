

function Card(props) {
    
    return (
        <div className="card">
            <img src={props.imageUrl} alt="cardImg" />
            <div className="imgCover"></div>
            <p>{props.title}</p>
            <b>${props.price}</b>
        </div>
    );
}

export default Card;