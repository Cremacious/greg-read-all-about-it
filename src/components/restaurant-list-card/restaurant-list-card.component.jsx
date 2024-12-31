import './restaurant-list-card.styles.scss';
import { useNavigate } from 'react-router-dom';

function RestaurantListCard({ restaurant }) {
  const navigate = useNavigate();
  const { name, location, type, id } = restaurant;

  const viewRestaurantHandler = () => {
    navigate(`/restaurants/${id}`);
  };

  return (
    <div className="restaurant-card-container">
      <div className="restaurant-card">
        <div className="restaurant-name">
          <h3>{name}</h3>
        </div>
        <div className="restaurant-type">
          <p>{type}</p>
        </div>
        <div className="restaurant-location">
          <p>{location}</p>
        </div>
        <br />
        <button
          className="view-button btn btn-primary"
          onClick={viewRestaurantHandler}
        >
          View
        </button>
      </div>
    </div>
  );
}

export default RestaurantListCard;
