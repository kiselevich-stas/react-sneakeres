import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from 'axios'

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  React.useEffect(() => {
      axios.get("https://622f6ba23ff58f023c2017b6.mockapi.io/items").then(res => {
        setItems(res.data);
      });
      axios.get("https://622f6ba23ff58f023c2017b6.mockapi.io/cart").then(res => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://622f6ba23ff58f023c2017b6.mockapi.io/cart",obj)
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveToCart = (id) => {
    setCartItems((prev) => prev.filter(item => item.id !== id));
    // axios.delete(`https://622f6ba23ff58f023c2017b6.mockapi.io/cart${id}`)
  }

  const onChangeInputValue = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };


  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer items={cartItems} onClose={() => setCartOpened(!cartOpened)} onRemove={onRemoveToCart} />
      ) : null}
      <Header onClickCart={() => setCartOpened(!cartOpened)} overflowHidden={() => document.body.style.overflow = 'hidden'}/>

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

        <div className="sneakers">
          {items
            .filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()))
            .map((obj, index) => (
              <Card
                key={index}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
