import { createContext, useState, useEffect } from 'react';
import { readCollection } from '../utils/firebase.utils';

export const RestaurantsContext = createContext({
  restaurants: [],
  setRestaurants: () => {},
  refreshRestaurants: () => {},
});

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const restaurantsData = await readCollection('restaurants');
    setRestaurants(restaurantsData);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const refreshRestaurants = () => {
    fetchRestaurants();
  };

  return (
    <RestaurantsContext.Provider value={{ restaurants, refreshRestaurants }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
