import "../index.css";

const KeyConceptsItems = ({ title, image, description }) => {
  return (
    <ul id="concepts">
      <li className="concept">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    </ul>
  );
};

export default KeyConceptsItems;
