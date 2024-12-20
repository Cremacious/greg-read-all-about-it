import { useState, useContext } from 'react';
import { createRestaurant } from '../../utils/firebase.utils';
import { RestaurantsContext } from '../../context/restaurants.context';
import { useNavigate } from 'react-router-dom';

function RestaurantForm() {
  const navigate = useNavigate();
  const defaultFormFields = {
    name: '',
    location: '',
    type: '',
    description: '',
    comments: ['comment1', 'comment2'],
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, location, type, description } = formFields;
  const { refreshRestaurants } = useContext(RestaurantsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createRestaurant(formFields);
    setFormFields(defaultFormFields);
    refreshRestaurants();
    navigate('/restaurants');
  };

  return (
    <div>
      <h2>Restaurant Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
          placeholder="Location"
        />
        <input
          type="text"
          name="type"
          value={type}
          onChange={handleChange}
          placeholder="Type"
        />
        <textarea
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RestaurantForm;
