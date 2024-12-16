import './App.css';

import { Route, Routes } from 'react-router-dom';
import RestaurantForm from './components/restaurant-form/restaurant-form.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Auth from './routes/auth/auth.component';
import Restaurants from './routes/restaurants/restaurants.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="sign-in" element={<Auth />} />
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="restaurant-form" element={<RestaurantForm />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
