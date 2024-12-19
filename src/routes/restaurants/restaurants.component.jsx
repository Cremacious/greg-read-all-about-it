import './restaurants.styles.scss';
import { useState, useEffect, useContext } from 'react';

import RestaurantListCard from '../../components/restaurant-list-card/restaurant-list-card.component';

import { RestaurantsContext } from '../../context/restaurants.context';

function Restaurants() {
  const { restaurants } = useContext(RestaurantsContext);
  const [restaurantsList, setRestaurantsList] = useState();

  useEffect(() => {
    setRestaurantsList(restaurantsList);
  }, [restaurants, restaurantsList]);

  return (
    <div className="restaurant-list-container">
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
