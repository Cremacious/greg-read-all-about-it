import './restaurants.styles.scss';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import RestaurantListCard from '../../components/restaurant-list-card/restaurant-list-card.component';

import { RestaurantsContext } from '../../context/restaurants.context';
import SearchSidebar from '../../components/search-sidebar/search-sidebar.component';

function Restaurants() {
  const navigate = useNavigate();
  const { restaurants } = useContext(RestaurantsContext);
  const [searchValue, setSearchValue] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    setFilteredRestaurants(
      restaurants.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          restaurant.type.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [restaurants, searchValue]);

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onTypeClick = (type) => {
    setSearchValue((prevValue) => (prevValue === type ? '' : type));
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleAddRestaurants = () => {
    navigate('/restaurant-form');
  };

  return (
    <div className="">
      <div className='button-container'>
        <button className="btn restaurant-button btn-success home-button" onClick={handleBack}>
          Back To Home
        </button>
        <button className="btn restaurant-button btn-success " onClick={handleAddRestaurants}>
          Add New Restaurant
        </button>
      </div>

      <div className="restaurant-list-container">
        <div className="restaurant-list-types">
          <SearchSidebar
            searchValue={searchValue}
            onClickHandler={onTypeClick}
            onChangeHandler={onSearchChange}
          />
        </div>
        <div className="restaurant-list">
          {filteredRestaurants.length > 0
            ? filteredRestaurants.map((restaurant) => (
                <RestaurantListCard
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              ))
            : 'No restaurants found'}
        </div>
      </div>
    </div>
  );
}

export default Restaurants;
