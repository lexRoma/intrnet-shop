import MyBag__item from "./MyBag__item";
import { Link } from "react-router-dom";
function MyBag(props) {
    
    return (
        <div  className="myBag" id="myBag">   
            
            <div className="myBag__overlay"></div>

            <div className="myBag__block">

                <div className="myBag__title">
                    <b>My Bag,</b>
                    <span className="myBag__countTotal">2 items</span>
                </div>

                <MyBag__item />

                <MyBag__item />
                

                <div className="myBag__totalCost">
                    <b>Total</b><span>$100.00</span>
                </div>

                <div className="myBag__buttons">
                    <Link to="/cart">
                        <button className="myBag__buttonsView">View bag</button> 
                    </Link>
                    
                    <button className="myBag__buttonsCheck">Check out</button> 
                </div>



            </div>
        </div>
    );
}

export default MyBag;