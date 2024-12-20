import './restaurant-list-card.styles.scss';
import { useNavigate } from 'react-router-dom';

function RestaurantListCard({ restaurant }) {
  const navigate = useNavigate();
  const { name, location, description, type, id } = restaurant;

  const viewRestaurantHandler = () => {
    navigate(`/restaurants/${id}`);
  };

  return (
    <div className="restaurant-card-container">
      <div className="restaurant-card">
        <h3>{name}</h3>
        <p>{location}</p>
        <p>{type}</p>
        <p>{description}</p>
        <button onClick={viewRestaurantHandler}>View</button>
      </div>
    </div>
  );
}

export default RestaurantListCard;
