import Card from './components/Card';
import Header from './components/Header';
import MyBag from './components/MyBag';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MyBag />
       

       <div className="main">
          <h2>Category name</h2>

          <div className="content">
            <Card />

            <Card />

            <Card />

            <Card />

            
          </div>
          

       </div>
    </div>
  );
}

export default App;
