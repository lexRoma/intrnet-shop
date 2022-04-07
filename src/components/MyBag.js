function MyBag() {
    return (
        <div style={{display: 'block'}} className="myBag">
            <div className="myBag__overlay"></div>

            <div className="myBag__block">

                <div className="myBag__title">
                    <b>My Bag,</b>
                    <span className="myBag__countTotal">2 items</span>
                </div>

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
                    <button className="myBag__item-btnPlus">+</button>
                    <span className="myBag__item-count">1</span>
                    <button className="myBag__item-btnMinus">-</button>
                    </div>

                    <div className="myBag__item-column3">
                    <img src="/img/Product D.jpg" alt="cardImg" />
                    </div>
                    
                </div>

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
                    <button className="myBag__item-btnPlus">+</button>
                    <span className="myBag__item-count">1</span>
                    <button className="myBag__item-btnMinus">-</button>
                    </div>

                    <div className="myBag__item-column3">
                    <img src="/img/Product D.jpg" alt="cardImg" />
                    </div>

                </div>

                <div className="myBag__totalCost">
                    <b>Total</b><span>$100.00</span>
                </div>

                <div className="myBag__buttons">
                    <button className="myBag__buttonsView">View bag</button> 
                    <button className="myBag__buttonsCheck">Check out</button> 
                </div>



            </div>
        </div>
    );
}

export default MyBag;