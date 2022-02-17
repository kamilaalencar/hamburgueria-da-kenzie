import CartProduct from "../CartProduct";
import "./style.css";

const CartFinal = ({ currentSale, setCurrentSale, removeProduct }) => {
  const amount = currentSale.reduce((total, atual) => {
    return total + atual.price;
  }, 0);
  return (
    <div className="container-cart">
      <div className="header-cart">
        <h3>Carrinho de Compras</h3>
      </div>
      <div className="card-product">
        {currentSale.map((item, index) => (
          <CartProduct removeProduct={removeProduct} key={index} item={item} />
        ))}
      </div>
      <div className="cart-total">
        {currentSale.length !== 0 ? (
          <>
            <div className="value">
              <p>Total</p>
              <span>R$ {amount.toFixed(2)}</span>
            </div>
            <div className="remove-all">
              <button onClick={() => setCurrentSale([])}>Remover Todos</button>
            </div>
          </>
        ) : (
          <div className="carrinhoVazio">
            <h4>Sua sacola está vazia</h4>
            <p>Adicione itens</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartFinal;
