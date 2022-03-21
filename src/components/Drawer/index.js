import styles from "./Drawer.module.scss";
import Info from "../Info";
import { AppContext } from "../../App";
import React from "react";
import axios from "axios";

function Drawer(props) {
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isOrderId, setIsOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  
  const {setCartItems, cartItems, setCartOpened, onRemoveToCart } =
    React.useContext(AppContext);

  const CartPrice = cartItems.reduce((acc,cur) => cur.price + acc,0)

  
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios.post("https://622f6ba23ff58f023c2017b6.mockapi.io/orders", {items: cartItems});
      // await axios.delete("https://622f6ba23ff58f023c2017b6.mockapi.io/cart");
      setIsOrderComplete(true);
      setCartItems([]);
      setIsOrderId(data.id)
      
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i] 
        await axios.delete(`https://622f6ba23ff58f023c2017b6.mockapi.io/cart/${item.id}`);
        delay(250)
      }
      
    } catch (error) {
      alert('Закажи ещ раз')
    }
    setIsLoading(false)
  };
  


  return (
    <div className={`overlay ${props.opened ? styles.overlayVisible : ''  }`}>
      <div className={styles.drawer }>
        <div className={styles.drawer__title}>
          <h2>Корзина</h2>
          <img
            onClick={() => setCartOpened(false)}
            src="./img/close.svg"
            alt=""
          />
        </div>

        {cartItems.length > 0 ? (
          <div className={styles.card__flex}>
            <div className={styles.cartItems}>
              {cartItems.map((obj) => (
                <div key={obj.id} className={styles.cartItem}>
                  <img
                    className={styles.cartItem__sneakers}
                    width={70}
                    height={70}
                    src={`${obj.imageUrl}`}
                    alt=""
                  />
                  <div className={styles.cartItem__info}>
                    <p>{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <button className={styles.btn__reset}>
                    <img
                      className={styles.btn__remove}
                      width={32}
                      height={32}
                      src="img/close.svg"
                      alt=""
                      onClick={() => onRemoveToCart(obj.id)}
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.drawer__info}>
              <ul className={styles.list__reset}>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{CartPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{Math.floor(CartPrice * 0.05)} руб.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className={styles.btn__reset + " " + styles.green__btn}
              >
                Оформить заказ
                <img  src={ isLoading ? '': "img/arrow.svg"} alt="" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : `Корзина пустая`}
            descr={
              isOrderComplete
                ? `Ваш заказ #${isOrderId} скоро будет передан курьерской доставке`
                : `Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.`
            }
            image={
              isOrderComplete ? "./img/orderImage.jpg" : "./img/emptyCart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
