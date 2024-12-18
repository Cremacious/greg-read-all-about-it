import { createContext, useState, useEffect } from 'react';
import { readCollection } from '../utils/firebase.utils';

export const RestaurantsContext = createContext({
  restaurants: [],
  setRestaurants: () => {},
});

export const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const restaurantsData = await readCollection('restaurants');
      setRestaurants(restaurantsData);
    };
    fetchRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
