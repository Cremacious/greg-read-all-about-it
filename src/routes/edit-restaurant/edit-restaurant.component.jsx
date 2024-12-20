import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { RestaurantsContext } from '../../context/restaurants.context';
import { editDocument, deleteDocument } from '../../utils/firebase.utils';

function EditRestaurant() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { restaurants, refreshRestaurants } = useContext(RestaurantsContext);
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
    refreshRestaurants();
    navigate('/restaurants/' + id);
  };

  // TODO: Redirect after successful delete, give user confirmation
  const handleDelete = async () => {
    navigate('/restaurants', { replace: true });
    await deleteDocument(id);
    refreshRestaurants();
  };

  if (!restaurant) {
    return <div>Loading...</div>;
  }

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
        <button onClick={handleDelete}>Delete Restaurant</button>
      </form>
    </div>
  );
}

export default EditRestaurant;
