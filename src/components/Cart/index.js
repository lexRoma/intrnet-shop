import React from 'react';
import Header from '../Header';
class Cart extends React.Component {



    render() {
        return (
            
            <div className='cart__page'>

                <Header />
                <h4>Cart</h4>


                <div className="cart__item">

                    <div className="cart__item-column1">
                        <p>Apollo Running Short</p>
                        <b>$50.00</b>
                        <div className="cart__item-sizes">
                            <button className="cart__item-sizes-S">S</button>
                            <button className="cart__item-sizes-M">M</button>
                        </div>
                        </div>

                    <div className="cart__item-column2">
                            <button className="cart__item-btnPlus" id='plusBtn'>+</button>

                            <span className="cart__item-count">1</span>

                            <button className="cart__item-btnMinus" id='minusBtn'>-</button>
                    </div>

                    <div className="cart__item-column3">
                        <img src="/img/Product D.jpg" alt="cardImg" />
                        </div>

                    </div>


                    <div className="cart__item">

                    <div className="cart__item-column1">
                        <p>Apollo Running Short</p>
                        <b>$50.00</b>
                        <div className="cart__item-sizes">
                            <button className="cart__item-sizes-S">S</button>
                            <button className="cart__item-sizes-M">M</button>
                        </div>
                        </div>

                    <div className="cart__item-column2">
                            <button className="cart__item-btnPlus" id='plusBtn'>+</button>

                            <span className="cart__item-count">1</span>

                            <button className="cart__item-btnMinus" id='minusBtn'>-</button>
                    </div>

                    <div className="cart__item-column3">
                        <img src="/img/Product D.jpg" alt="cardImg" />
                        </div>

                    </div>
            </div>
        );
    }
}

export default Cart;