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
    <div className="home-containerX">
      <h3>Home</h3>
      <div className="buttons-container">
        <button className="button btn btn-primary" onClick={handleAddRestaurants}>
          Add Restaurant
        </button>
        <button className="button" onClick={handleViewRestaurants}>
          View Restaurants
        </button>
        <button className="button">Recommend a restaurant</button>
        <button className="button">Sign In</button>
      </div>
    </div>
  );
}

export default Home;
