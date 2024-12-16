import { tempRestaurants } from "../../utils/temp-data";
import { useState } from "react";

import RestaurantListCard from "../../components/restaurant-list-card/restaurant-list-card.component";

function Restaurants() {

    const [restaurants, setRestaurants] = useState(tempRestaurants);
  return (
    <div>
      <h3>Restaurants</h3>
      <p>View all restaurants</p>
        <ul>
            {restaurants.map((restaurant) => (
            <RestaurantListCard key={restaurant.id} restaurant={restaurant} />
            ))}
        </ul>
    </div>
  );
}

export default Restaurants;
