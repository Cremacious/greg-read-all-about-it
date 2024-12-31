import './restaurants.styles.scss';
import { useState, useEffect, useContext } from 'react';

import RestaurantListCard from '../../components/restaurant-list-card/restaurant-list-card.component';

import { RestaurantsContext } from '../../context/restaurants.context';
import SearchSidebar from '../../components/search-sidebar/search-sidebar.component';


function Restaurants() {
  const { restaurants } = useContext(RestaurantsContext);
  const [searchValue, setSearchValue] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    setFilteredRestaurants(
      restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [restaurants, searchValue]);

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="restaurant-list-container">
      <div className="restaurant-list-types">
        <SearchSidebar onChangeHandler={onSearchChange} />
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length > 0
          ? filteredRestaurants.map((restaurant) => (
              <RestaurantListCard key={restaurant.id} restaurant={restaurant} />
            ))
          : 'No restaurants found'}
      </div>
    </div>
  );
}



export default Restaurants;
