function Restaurant({ restaurant }) {
  const { name, location, description, type, comments } = restaurant;

  return (
    <div>
      <h3>Restaurant Page</h3>
      <p>{name}</p>
      <p>{location}</p>
      <p>{type}</p>
      <p>{description}</p>
      <p>{comments}</p>
      <button>Edit</button>
    </div>
  );
}

export default Restaurant;
