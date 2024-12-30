import './restaurants.styles.scss';
import { useState, useEffect, useContext } from 'react';

import RestaurantListCard from '../../components/restaurant-list-card/restaurant-list-card.component';

import { RestaurantsContext } from '../../context/restaurants.context';
import SearchSidebar from '../../components/search-sidebar/search-sidebar.component';

function Restaurants() {
  const { restaurants } = useContext(RestaurantsContext);
  const [restaurantsList, setRestaurantsList] = useState();

  useEffect(() => {
    setRestaurantsList(restaurantsList);
  }, [restaurants, restaurantsList]);

  return (
    <div className="restaurant-list-container">
      <div className="restaurant-list-types">
        <SearchSidebar />
      </div>
      <div className="restaurant-list">
        {restaurants
          ? restaurants.map((restaurant) => (
              <RestaurantListCard key={restaurant.id} restaurant={restaurant} />
            ))
          : 'Loading...'}
      </div>
    </div>
  );
}

export default Restaurants;
