const SearchItem = (props) => {
  return (
    <li>
      <img src={props.image} alt={`${props.name} poster`} />
      <h3>{props.name}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{props.year}</span>
        </p>
      </div>
    </li>
  );
};

export default SearchItem;
