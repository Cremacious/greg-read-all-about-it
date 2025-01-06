import './App.css';

import { Route, Routes, Link } from 'react-router-dom';
import RestaurantForm from './components/restaurant-form/restaurant-form.component';
import RandomRestaurant from './routes/random-restaurant/random-restaurant.component';
import Home from './routes/home/home.component';
import Auth from './routes/auth/auth.component';
import Restaurants from './routes/restaurants/restaurants.component';
import Restaurant from './routes/restaurant/restaurant.component';
import EditRestaurant from './routes/edit-restaurant/edit-restaurant.component';


function App() {
  return (
    <div className="App">
      <header className="App-container">
        {/* <Navigation /> */}
        <div className="app-view">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sign-in" element={<Auth />} />
            <Route path="restaurants/" element={<Restaurants />} />
            <Route path="restaurant-form" element={<RestaurantForm />} />
            <Route path="restaurants/:id" element={<Restaurant />} />
            <Route path="edit-restaurant/:id" element={<EditRestaurant />} />
            <Route path="random-restaurant" element={<RandomRestaurant />} />
          </Routes>
        </div>
        <div className='sign-in-container'>
          <Link to='/sign-in' className='sign-in-link'>Greg? Sign in here..</Link>
        </div>
      </header>
    </div>
  );
}

export default App;
