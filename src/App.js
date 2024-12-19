import './App.css';

import { Route, Routes } from 'react-router-dom';
import RestaurantForm from './components/restaurant-form/restaurant-form.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Auth from './routes/auth/auth.component';
import Restaurants from './routes/restaurants/restaurants.component';
import Restaurant from './routes/restaurant/restaurant.component';
import EditRestaurant from './routes/edit-restaurant/edit-restaurant.component';

function App() {
  return (
    <div className="App">
      <header className="App-container">
        <div className="app-view">
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="sign-in" element={<Auth />} />
              <Route path="restaurants/" element={<Restaurants />} />
              <Route path="restaurant-form" element={<RestaurantForm />} />
              <Route path="restaurants/:id" element={<Restaurant />} />
              <Route path="edit-restaurant/:id" element={<EditRestaurant />} />
            </Route>
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
