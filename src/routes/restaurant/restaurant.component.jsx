import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import { UserContext } from '../../context/user.context';
import { RestaurantsContext } from '../../context/restaurants.context';
import Map from '../../components/map/map.component';
import './restaurant.styles.scss';

function Restaurant() {
  const { currentUser } = useContext(UserContext);
  const { restaurants } = useContext(RestaurantsContext);
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null); // Initialize to null

  const navigate = useNavigate();

  useEffect(() => {
    const currentRestaurant = restaurants.find(
      (restaurant) => restaurant.id === id
    );
    setRestaurant(currentRestaurant);
  }, [restaurants, id]);

  const handleEdit = () => {
    navigate(`/edit-restaurant/${id}`);
  };

  const handleBack = () => {
    navigate('/restaurants');
  };

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  const { name, location, type, description } = restaurant;

  return (
    <div className="restaurant-container">
      <div className="restaurant-buttons-container">
        {currentUser && (
          <button className="btn btn-success" onClick={handleEdit}>
            Edit
          </button>
        )}
        <button className="btn btn-success" onClick={handleBack}>
          Back
        </button>
      </div>
      <div className="restaurant-card">
        
<Map address={location} />
      </div>
    </div>
  );
}

export default Restaurant;
