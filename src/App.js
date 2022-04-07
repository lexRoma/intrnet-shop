

function App() {
  return (
    <div className="wrapper">
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
       <div className="content">
          <h2>Category name</h2>

          <div className="card">
            <img src="/img/Product D.jpg" alt="cardImg" />
            <p>Apollo Running Short</p>
            <b>$50.00</b>
          </div>

       </div>
    </div>
  );
}

export default App;
