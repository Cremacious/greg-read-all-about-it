import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { RestaurantsContext } from '../../context/restaurants.context';
import Map from '../../components/map/map.component';
import './restaurant.styles.scss';

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
      {restaurant ? (
        <div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-4">
              <div className="card map-card">
                <div className="card-body text-center d-flex flex-column align-items-center">
                  <Map address={location} />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="name-card">
                <p>{name}</p>
              </div>
              <div className="details-card">
                <p>{location}</p>
                <p>{type}</p>
                <p>{description}</p>
              </div>
              <div className="comments-card">
                <p>{comments}</p>
              </div>
            </div>
          </div>

          <button className="btn btn-success" onClick={handleEdit}>
            Edit
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Restaurant;
