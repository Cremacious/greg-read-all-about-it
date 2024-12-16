function RestaurantListCard({ restaurant }) {
  const { name, location, description, type } = restaurant;

  return (
    <div>
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{type}</p>
      <p>{description}</p>
    </div>
  );
}

export default RestaurantListCard;
