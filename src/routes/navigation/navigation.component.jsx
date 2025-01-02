import { Outlet, useNavigate } from 'react-router-dom';
import './navigation.styles.scss';

function Navigation() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleForward = () => {
    navigate(1);
  };

  return (
    <div className="navigation-container">
      <button className="btn btn-outline-success back-button" onClick={handleBack}>
        Back
      </button>
      <button className="btn btn-outline-success next-button" onClick={handleForward}>
        Forward
      </button>
      <Outlet />
    </div>
  );
}

export default Navigation;
