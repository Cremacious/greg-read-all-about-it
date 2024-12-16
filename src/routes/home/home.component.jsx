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
    <div>
      <h3>Home</h3>
      <p>Welcome to the Home page</p>
      <button onClick={handleAddRestaurants}>Add Restaurant</button>
      <button onClick={handleViewRestaurants}>View Restaurants</button>
    </div>
  );
}

export default Home;
