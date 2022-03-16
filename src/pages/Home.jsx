import Card from "../components/Card";
import React from "react";
// import { AppContext } from "../App";

function Home({
  items,
  inputValue,
  onAddToCart,
  onAddToFavorite,
  onChangeInputValue,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItem = items.filter((obj) =>
      obj.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (isLoading ? [...Array(12)] : filtredItem).map((obj, index) => (
      <Card
        {...obj}
        key = {index}
        onPlus={(obj) => onAddToCart(obj)}
        onFavorite={() => onAddToFavorite(obj)}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content">
      <div className="content__info">
        <h1>
          {inputValue ? `Поиск по запросу: "${inputValue}"` : "Кроссовки"}
        </h1>
        <div className="search">
          <img width={16} height={16} src="./img/search.svg" alt="" />
          <input
            onChange={onChangeInputValue}
            value={inputValue}
            type="search"
            placeholder="Поиск"
          />
        </div>
      </div>

      <div className="sneakers">{renderItems()}</div>
    </div>
  );
}

export default Home;
