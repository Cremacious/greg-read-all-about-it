import './restaurant-list-card.styles.scss';
import { useNavigate } from 'react-router-dom';
import { foodSvgs } from '../../utils/food-types.utils';

function RestaurantListCard({ restaurant }) {
  const navigate = useNavigate();
  const { name, location, type, id } = restaurant;

  const viewRestaurantHandler = () => {
    navigate(`/restaurants/${id}`);
  };

  return (
    <div className="restaurant-card-container">
      <div className="restaurant-card">
        <img src={foodSvgs[type]} alt={type} className="image" />
        <div className="restaurant-name">
          <p>{name}</p>
        </div>
        <div className="restaurant-type">
          <p>{type}</p>
        </div>
        <div className="restaurant-location">
          <p>{location}</p>
        </div>
        <br />
        <button
          className="view-button btn btn-success"
          onClick={viewRestaurantHandler}
        >
          View
        </button>
      </div>
    </div>
  );
}

export default RestaurantListCard;
