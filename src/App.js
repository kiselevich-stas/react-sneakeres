import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Orders from "./pages/Orders";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

export const AppContext = React.createContext({});

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);

  const [items, setItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const cartResponce = await axios.get(
          "https://622f6ba23ff58f023c2017b6.mockapi.io/cart"
        );
        const favoritesResponce = await axios.get(
          "https://622f6ba23ff58f023c2017b6.mockapi.io/favorites"
        );
        const itemsResponce = await axios.get(
          "https://622f6ba23ff58f023c2017b6.mockapi.io/items"
        );

        setIsLoading(false);

        setCartItems(cartResponce.data);
        setFavorites(favoritesResponce.data);
        setItems(itemsResponce.data);
      } catch (error) {
        alert ("О мой Бог !!! Ошибка!!!")
      }
    }
    fetchData();
  }, []);

  const  onAddToCart = async (obj) => {
    console.log(obj.id);
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if (findItem) {
        axios.delete(
          `https://622f6ba23ff58f023c2017b6.mockapi.io/cart/${Number(findItem.id)}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
      } else {
        const {data} = await axios.post("https://622f6ba23ff58f023c2017b6.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, data]);
      }
      console.log(cartItems);
    } catch (error) {
      alert("Случилось плохо");
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://622f6ba23ff58f023c2017b6.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://622f6ba23ff58f023c2017b6.mockapi.io/favorites",
          obj
        ); ///{data} == response.data
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Shittt!");
    }
  };

  const onRemoveToCart = (id) => {
    console.log(id);
    axios.delete(
      `https://622f6ba23ff58f023c2017b6.mockapi.io/cart/${Number(id)}`
    );
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };

  const onChangeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((item) => Number(item.parentId) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{
        items,
        favorites,
        cartItems,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        onRemoveToCart,
        setCartItems,
      }}
    >
      <div className="wrapper">
        <Drawer opened={cartOpened} />
        <Header
          onClickCart={() => {
            return setCartOpened(!cartOpened);
          }}
        />
        <Routes>
          {" "}
          <Route
            path=""
            exact
            element={
              <Home
                items={items}
                inputValue={inputValue}
                cartItems={cartItems}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                onChangeInputValue={onChangeInputValue}
                isLoading={isLoading}
              />
            }
          ></Route>{" "}
        </Routes>
        <Routes>
          {" "}
          <Route path="/favorites" exact element={<Favorites />}></Route>{" "}
        </Routes>
        <Routes>
          {" "}
          <Route path="/orders" exact element={<Orders />}></Route>{" "}
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
