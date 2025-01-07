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
      <div className="restaurant-card-square">
        <img src={foodSvgs[type]} alt={type} className="image" />
        <div className="restaurant-name">
          <p>{name}</p>
        </div>
        <div className="restaurant-location">
          <p>{location}</p>
          <div className='button-container'>
            <button className="btn btn-lg btn-success " onClick={viewRestaurantHandler}>
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantListCard;
