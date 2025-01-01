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
    <>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="greg-container">
          <img src={greg} alt="Greg giving a thumbs up" className="greg" />
        </div>
      </div>

      <div className="row d-flex justify-content-center button-container">
        <div className="col-md-6 col-xl-4">
          <div className="card button-card">
            <div className="card-body text-center d-flex flex-column align-items-center">
              <button
                className="btn btn-success"
                onClick={handleAddRestaurants}
              >
                Add New Restaurant
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div className="card button-card">
            <div className="card-body text-center d-flex flex-column align-items-center">
              <button
                className="btn btn-success"
                onClick={handleViewRestaurants}
              >
                View Restaurants
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-4">
          <div className="card button-card">
            <div className="card-body text-center d-flex flex-column align-items-center">
              <button
                className="btn btn-success"
                onClick={handleViewRestaurants}
              >
                Random Restaurant
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
