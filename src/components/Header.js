function Header() {
    return (
        <header>
         <nav className="headerMenu">
           <ul>
             <li>women</li>
             <li>men</li>
             <li>kids</li>
           </ul>
         </nav>

         <a className="headerBuy">Buy</a>
          <div className="headerRightBlock">
              <select className="headerSelectCurrency">
              <option value="$">$</option>
              <option value="E">€ EUR</option>
              <option value="Ph">¥ JPY</option>
              </select>
              <a className="headerBucket"><img src="/img/buy.png" /></a>
          </div>
          
       </header>
    );
}

export default Header;