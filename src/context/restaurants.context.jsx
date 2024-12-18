import { createContext, useState, useEffect } from 'react';
import { readCollection } from '../utils/firebase.utils';

export const RestaurantsContext = createContext({
  restaurants: [],
  setRestaurants: () => {},
});

export const RestaurantsProvider = ({ children }) => {
  const [restaurantsMap, setRestaurantsMap] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const restaurantsData = await readCollection('restaurants');
      setRestaurantsMap(restaurantsData);
    };
    fetchRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurantsMap, setRestaurantsMap }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
