import { useContext, useState } from 'react';
import { RestaurantsContext } from '../../context/restaurants.context';
import { useNavigate } from 'react-router-dom';

function RandomRestaurant() {
  const navigate = useNavigate();
  const { restaurants } = useContext(RestaurantsContext);
  const [randomRestaurant, setRandomRestaurant] = useState(null);

  const handleChooseRandom = () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];
    setRandomRestaurant(randomRestaurant);
  };

  const handleViewRestaurant = (id) => {
    navigate(`/restaurants/${id}`);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div>
      <button className="btn btn-success" onClick={handleBack}>
        Back
      </button>
      <h1>Random Restaurant</h1>
      <button className="btn btn-success" onClick={handleChooseRandom}>
        Choose Random Restaurant
      </button>
      {randomRestaurant ? (
        <div>
          <h2>{randomRestaurant.name}</h2>
          <p>{randomRestaurant.type}</p>
          <button
            className="btn btn-success"
            onClick={() => handleViewRestaurant(randomRestaurant.id)}
          >
            {' '}
            View Restaurant
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default RandomRestaurant;
