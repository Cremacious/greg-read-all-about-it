import { useState, useEffect } from 'react';

import RestaurantListCard from '../../components/restaurant-list-card/restaurant-list-card.component';

import { readCollection } from '../../utils/firebase.utils';

function Restaurants() {
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    const fetchRestaurants = async () => {
      const restaurantsData = await readCollection('restaurants');
      console.log(`restaurants read`);
      setRestaurants(restaurantsData);
    };
    fetchRestaurants();
  }, []);

  return (
    <div>
      <h3>Restaurants</h3>
      <p>View all restaurants</p>
      <ul>
        {restaurants
          ? restaurants.map((restaurant) => (
              <RestaurantListCard key={restaurant.id} restaurant={restaurant} />
            ))
          : 'Loading...'}
      </ul>
    </div>
  );
}

export default Restaurants;
