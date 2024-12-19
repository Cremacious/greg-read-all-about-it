import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { RestaurantsContext } from '../../context/restaurants.context';
import { editCollection } from '../../utils/firebase.utils';

function EditRestaurant() {
  const { id } = useParams();
  const { restaurants } = useContext(RestaurantsContext);
  const [restaurant, setRestaurant] = useState([]);
  const { name, location, type, description, comments } = restaurant;

  useEffect(() => {
    const currentRestaurant = restaurants.find(
      (restaurant) => restaurant.id === id
    );
    setRestaurant(currentRestaurant);
  }, [restaurants, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editCollection('restaurants', restaurant, id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} />
        <input type="text" name="location" value={location} />
        <input type="text" name="type" value={type} />
        <textarea name="description" value={description}></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditRestaurant;
