import { useState, useContext } from 'react';
import { createRestaurant } from '../../utils/firebase.utils';
import { RestaurantsContext } from '../../context/restaurants.context';
import { useNavigate } from 'react-router-dom';
import { foodTypes } from '../../utils/food-types.utils';

import './restaurant-form.styles.scss';

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
    <div className="row d-flex justify-content-center">
      <div className="col-md-6 col-xl-4">
        <form className="form-field" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              className="form-control form-card"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>

          <div className="input-container">
            <input
              className=" form-card form-control"
              type="text"
              name="location"
              value={location}
              onChange={handleChange}
              placeholder="Location"
            />
          </div>
          <div className="input-container">
            <select
              className="form-control form-card"
              name="type"
              value={type}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Type
              </option>
              {foodTypes.map((foodType) => (
                <option key={foodType} value={foodType}>
                  {foodType}
                </option>
              ))}
            </select>
          </div>
          <div className="input-container">
            <textarea
              className="form-control form-card"
              name="description"
              value={description}
              onChange={handleChange}
              placeholder="Description"
            ></textarea>
          </div>
        </form>
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default RestaurantForm;
