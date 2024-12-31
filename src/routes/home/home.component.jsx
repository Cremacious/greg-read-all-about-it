import './home.styles.scss';
import { useNavigate } from 'react-router-dom';
import greg from '../../greg.png';
import logo from '../../logo.png';

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
      <div className="logo-container">
        <img src={greg} alt="Greg giving a thumbs up" className="greg" />
        <br />
        <img src={logo} alt="Logo" className="logo" />
      </div>
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
