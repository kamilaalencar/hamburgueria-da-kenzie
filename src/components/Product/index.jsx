import "./style.css";
const Product = ({ item: { img, name, category, price, id }, handleClick }) => {
  return (
    <div className="cards">
      <div className="container-image">
        <img src={img} alt={name} />
      </div>
      <div className="container-info">
        <h3>{name}</h3>
        <h6>{category}</h6>
        <p>
          R$ <span>{price.toFixed(2)}</span>
        </p>
        <button
          className="addToCart"
          id={id}
          onClick={(e) => handleClick(e.target.id)}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};
export default Product;
