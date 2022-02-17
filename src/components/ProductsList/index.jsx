import "./style.css";
import Product from "../Product";
const ProductsList = ({ products, filteredProducts, handleClick }) => {
  return (
    <>
      <div className="container-cards">
        {filteredProducts.length === 0
          ? products.map((item, index) => (
              <Product key={index} handleClick={handleClick} item={item} />
            ))
          : filteredProducts.map((item, index) => (
              <Product key={index} handleClick={handleClick} item={item} />
            ))}
      </div>
    </>
  );
};

export default ProductsList;
