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
            <h3 className='detailsTilte'><b>Apollo</b> Running Short</h3>

            {/* <div className='detailsSizesBtn'>
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>

            </div> */}
            <h4 className='detailsSizeTitle'>Size:</h4>

            <div class="form_radio_btn">
              <input id="radio-1" type="radio" name="radio" value="1" />
              <label for="radio-1">XS</label>
            </div>
            
            <div class="form_radio_btn">
              <input id="radio-2" type="radio" name="radio" value="2" />
              <label for="radio-2">S</label>
            </div>
            
            <div class="form_radio_btn">
              <input id="radio-3" type="radio" name="radio" value="3" />
              <label for="radio-3">M</label>
            </div>

            <div class="form_radio_btn">
              <input id="radio-4" type="radio" name="radio" value="4" />
              <label for="radio-4">L</label>
            </div>
            
            <h4 className='detailsColorsTitle'>Colors:</h4>

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