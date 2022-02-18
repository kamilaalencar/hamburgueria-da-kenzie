import { useState } from "react";
import "./style.css";
const Header = ({ showProducts }) => {
  const [userInput, setUserInput] = useState("");
  return (
    <>
      <header>
        <div className="container-header">
          <div className="logo">
            <h1>
              Burguer <span>Kenzie</span>
            </h1>
          </div>
          <div className="container-search">
            <input
              onChange={(e) => {
                showProducts(e.target.value);
                setUserInput(e.target.value);
              }}
              type="text"
              placeholder="Digitar Pesquisa"
            />
            <button>Pesquisar</button>
          </div>
        </div>
      </header>

      {userInput !== "" && (
        <div className="search-info">
          <h4>Resultados para:</h4>
          <p>{userInput}</p>
        </div>
      )}
    </>
  );
};

export default Header;
