import styles from './Card.module.scss';
import { Link } from "react-router-dom";
console.log(styles)

function Card(props) {
    console.log(props)

    const onClickCard = (event) => {
        let cardItem = document.getElementById("cardItem");
        let card = document.getElementById("main");
        
        card.style.display = "none";
    };

    
    
    return (
        <Link to="/details">
        <div className={styles.card} id="cardItem" onClick={onClickCard}>
            <img src={props.imageUrl} alt="cardImg" />
            <div className="imgCover"></div>
            <p>{props.title}</p>
            <b>${props.price}</b>
        </div>
        </Link>
    );

    
}

export default Card;