import styles from './Card.module.scss';
console.log(styles)

function Card(props) {
    console.log(props)
    
    return (
        <div className={styles.card}>
            <img src={props.imageUrl} alt="cardImg" />
            <div className="imgCover"></div>
            <p>{props.title}</p>
            <b>${props.price}</b>
        </div>
    );
}

export default Card;