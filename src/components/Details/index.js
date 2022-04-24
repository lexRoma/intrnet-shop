import React from 'react';
import styles from './Details.module.scss';


class Details extends React.Component {
  
    render() {
      return (
        <div className="productDetails">

          <div className="detailsVariantes">
            <div className="var"><img src="/img/Product D.jpg" alt="cardImg1" /></div>
            <div className="var"><img src="/img/Product D.jpg" alt="cardImg2" /></div>
            <div className="var"><img src="/img/Product D.jpg" alt="cardImg3" /></div>
          </div>
          <div className="detailsImg"><img src="/img/Product D.jpg" alt="cardImg" /></div>

          <div className="detailsDescr">
            <h3 className='detailsTilte'>Apollo Running Shirt</h3>

            <div className='detailsSizesBtn'>
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>

            </div>
            
            <h4>Colors</h4>

            <div className='detailsColors'>
              <div className='detailsColorsBlock'></div>
              <div className='detailsColorsBlock'></div>
              <div className='detailsColorsBlock'></div>
            </div>

            

            <div className='detailsPrice'>
              <h4>Price:</h4>
              <span>$ 50,00</span>
            </div>

            <button className='detailsAddBtn'>add to cart</button>

            <p className='detailsText'>Find stunning women's cocktail dresses and party dresses. 
              Stand out in lace and metallic cocktail dresses and party dresses 
              from all your favorite brands.</p>
          </div>
        </div>
      );
    }
}

export default Details;