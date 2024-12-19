import './home.styles.scss';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleAddRestaurants = () => {
    navigate('/restaurant-form');
  };

  const handleViewRestaurants = () => {
    navigate('/restaurants');
  };

  return (
    <div className="home-container">
      <h3>Welcome to read all about it!</h3>
      <div className="buttons-container">
        <button className="button btn" onClick={handleAddRestaurants}>
          Add Restaurant
        </button>
        <button className="button btn" onClick={handleViewRestaurants}>
          View Restaurants
        </button>
        <button className="button btn">Recommend a restaurant</button>
        <button className="button btn">Sign In</button>
      </div>
    </div>
  );
}

export default Home;
