import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { RestaurantsContext } from '../../context/restaurants.context';

function Restaurant() {
  const { restaurants } = useContext(RestaurantsContext);
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const { name, location, type, description, comments } = restaurant;

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

  return (
    <div>
      <h3>Restaurant Page</h3>
      <p>{name}</p>
      <p>{location}</p>
      <p>{type}</p>
      <p>{description}</p>
      <p>{comments}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default Restaurant;
