import Card from './components/Card';
import Header from './components/Header';
import MyBag from './components/MyBag';

const items = [
  {name: 'Apollo Running Short', price: '70.00', imageUrl: "/img/Product D.jpg"},
  {name: 'Apollo Running Short', price: '50.00', imageUrl: "/img/Product B.jpg"},
  {name: 'Mens sneakers Nike Blazer', price: '12.99', imageUrl: "/img/Product A.jpg"},
  {name: 'Apollo Running Short', price: '70.00', imageUrl: "/img/Product D.jpg"},
  {name: 'Apollo Running Short', price: '58.00', imageUrl: "/img/Product C.jpg"},
  {name: 'Apollo Running Short', price: '50.00', imageUrl: "/img/Product B.jpg"}
]

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MyBag />
       

       <div className="main">
          <h2>Category name</h2>

          <div className="content">
            
            
            {items.map((obj) => (
               <Card 
                title={obj.name}
                price= {obj.price}
                imageUrl={obj.imageUrl}
              /> 

            ))}
            

            
          </div>
          

       </div>
    </div>
  );
}

export default App;
