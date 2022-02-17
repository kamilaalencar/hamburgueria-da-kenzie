import "./style.css";

const CartProduct = ({ item: { img, name, category, id }, removeProduct }) => {
  return (
    <div className="cart-card">
      <div className="container-img">
        <img src={img} alt={name} />
      </div>
      <div className="data-products">
        <div className="higher">
          <h3>{name}</h3>
          <button
            className="remove-product"
            id={id}
            onClick={(e) => removeProduct(e.target.id)}
          >
            Remover
          </button>
        </div>
        <div>
          <h6>{category}</h6>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
