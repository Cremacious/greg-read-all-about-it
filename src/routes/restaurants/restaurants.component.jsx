import { useState, useEffect, useContext } from 'react';

import RestaurantListCard from '../../components/restaurant-list-card/restaurant-list-card.component';

import { RestaurantsContext } from '../../context/restaurants.context';

function Restaurants() {
  const { restaurantsMap } = useContext(RestaurantsContext);
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    setRestaurants(restaurantsMap);
  }, [restaurants, restaurantsMap]);

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
