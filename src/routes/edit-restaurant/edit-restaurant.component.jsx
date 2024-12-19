import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { RestaurantsContext } from '../../context/restaurants.context';
import { editDocument } from '../../utils/firebase.utils';

function EditRestaurant() {
  const { id } = useParams();
  const { restaurants } = useContext(RestaurantsContext);
  const [restaurant, setRestaurant] = useState({
    name: '',
    location: '',
    type: '',
    description: '',
    comments: [],
  });

  useEffect(() => {
    const currentRestaurant = restaurants.find(
      (restaurant) => restaurant.id === id
    );
    if (currentRestaurant) {
      setRestaurant(currentRestaurant);
    }
  }, [restaurants, id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRestaurant((prevRestaurant) => ({
      ...prevRestaurant,
      [name]: value,
    }));
  };

  // TODO: Redirect after successful edit
  const handleSubmit = async (event) => {
    event.preventDefault();
    await editDocument(id, restaurant);
  };

  return (
    <div>
      <h1>Edit Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={restaurant.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={restaurant.location}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={restaurant.type}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={restaurant.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Update Restaurant</button>
      </form>
    </div>
  );
}

export default EditRestaurant;
