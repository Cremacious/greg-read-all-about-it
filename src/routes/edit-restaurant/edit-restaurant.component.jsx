import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { RestaurantsContext } from '../../context/restaurants.context';
import { editDocument, deleteDocument } from '../../utils/firebase.utils';
import { foodTypes } from '../../utils/food-types.utils';

import './edit-restaurant.styles.scss';

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

  const handleBack = () => {
    navigate(-1);
  };

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" edit-container row d-flex justify-content-center">
      <div className="col-md-6 col-xl-4">
        <button className="btn btn-success" onClick={handleBack}>
          Back
        </button>
        <form className="form-field" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              className="form-card form-control"
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
              className="form-card form-control"
              type="text"
              name="location"
              value={restaurant.location}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Type:
            <select
              className="form-card form-control"
              name="type"
              value={restaurant.type}
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
          </label>
          <br />
          <label>
            Description:
            <textarea
              className="form-card form-control"
              name="description"
              value={restaurant.description}
              onChange={handleChange}
            />
          </label>
          <br />
          <button className="btn btn-success" type="submit">
            Update Restaurant
          </button>
          <button className="btn btn-success" onClick={handleDelete}>
            Delete Restaurant
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditRestaurant;
