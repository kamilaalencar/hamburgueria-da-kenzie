import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import CartFinal from "./components/Cart/Cartfinal";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  const showProducts = (input) => {
    const filterProdutos = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(input.toLowerCase()) ||
        product.category.toLowerCase().includes(input.toLowerCase())
      );
    });
    setFilteredProducts([...filterProdutos]);
  };

  function handleClick(productId) {
    const product = products.find((item) => item.id === Number(productId));
    if (!currentSale.includes(product)) {
      setCurrentSale([...currentSale, product]);
    }
  }

  const removeProduct = (productId) => {
    const remove = currentSale.findIndex(
      (item) => item.id === Number(productId)
    );
    currentSale.splice(remove, 1);
    setCurrentSale([...currentSale]);
  };

  return (
    <>
      <div className="App">
        <Header showProducts={showProducts} />
        <main>
          <ProductsList
            products={products}
            filteredProducts={filteredProducts}
            handleClick={handleClick}
          />
          <CartFinal
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            removeProduct={removeProduct}
          />
        </main>
      </div>
    </>
  );
}

export default App;
