import { Link } from "react-router-dom";

function RestaurantListCard({ restaurant }) {
  const { name, location, description, type, id } = restaurant;

  return (
    <div>
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{type}</p>
      <p>{description}</p>
      <button>
        <Link to={`/restaurant/${id}`}>View</Link>
      </button>
    </div>
  );
}

export default RestaurantListCard;
