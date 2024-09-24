import './App.css';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
    <div className='block'>
    <AllCategories />
    <Cart />
    <footer>
    <p className='footerText'>Developed by <a href='https://alesya-superfin-web-developer.glitch.me/' target='blank'>Alesya Superfin</a> </p>
    </footer> 
    </div>
    <div className='block dark'>
    <Dishes />
    </div>

    </div>
  );
}

export default App;
