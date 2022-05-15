import { Link } from 'react-router-dom';
import MyBag from './MyBag';

function Header() {

  const onClickBucket = () => {
    document.getElementById('myBag').classList.toggle('active');
  }

  // const onClickLabel = (event) => {
  //   let cardItem = document.getElementById("cardItem");
  //   let card = document.getElementById("main");
    
  //   card.style.display = "block";
  // };



    return (
        <header>
         <nav className="headerMenu">
           <ul>
             <li>women</li>
             <li>men</li>
             <li>kids</li>
           </ul>
         </nav>

          <Link to="/">
            <button title="Back to shop" className="headerBuy"><img alt='Back' src="/img/bucket.png" /></button>
          </Link>
         
          <div className="headerRightBlock">
              <select className="headerSelectCurrency">
              <option value="$">$</option>
              <option value="E">€ EUR</option>
              <option value="Ph">¥ JPY</option>
              </select>

              <button className="headerBucket" onClick = {() => onClickBucket()}>
                <img alt='buy' src="/img/buy.png" />
              </button>
              <MyBag />
          </div>
          
       </header>
    );
}

export default Header;