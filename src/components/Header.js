function Header() {

  const onClickBucket = () => {
    document.getElementById('myBag').classList.toggle('active');
  }



    return (
        <header>
         <nav className="headerMenu">
           <ul>
             <li>women</li>
             <li>men</li>
             <li>kids</li>
           </ul>
         </nav>

         <a className="headerBuy"><img src="/img/bucket.png" /></a>
          <div className="headerRightBlock">
              <select className="headerSelectCurrency">
              <option value="$">$</option>
              <option value="E">€ EUR</option>
              <option value="Ph">¥ JPY</option>
              </select>

              <button className="headerBucket" onClick = {() => onClickBucket()}>
                <img src="/img/buy.png" />
              </button>
          </div>
          
       </header>
    );
}

export default Header;