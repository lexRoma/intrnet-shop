import styles from './MyBag__item.module.scss';
import React from 'react';

function MyBag__item() {

    const [count = 0, setCount] = React.useState();

    let plusBtn = document.querySelector('#plusBtn');
    let minusBtn = document.querySelector('#minusBtn');

    const plus = () => {
        setCount(count + 1);
    }

    const minus = () => {
        
        if (count > 0) {
            setCount(count - 1);
            minusBtn.removeAttribute('disabled');
        } else {
            minusBtn.setAttribute('disabled');
        }
    }

    
    

    return (
        <div className="myBag__item">

                    <div className="myBag__item-column1">
                    <p>Apollo Running Short</p>
                    <b>$50.00</b>
                    <div className="myBag__item-sizes">
                        <button className="myBag__item-sizes-S">S</button>
                        <button className="myBag__item-sizes-M">M</button>
                    </div>
                    </div>

                    <div className="myBag__item-column2">
                        <button className="myBag__item-btnPlus" id='plusBtn' onClick={plus}>+</button>

                        <span className="myBag__item-count">{count}</span>

                        <button className="myBag__item-btnMinus" id='minusBtn' onClick={minus}>-</button>
                    </div>

                    <div className="myBag__item-column3">
                    <img src="/img/Product D.jpg" alt="cardImg" />
                    </div>
                    
                </div>
    );
}

export default MyBag__item;