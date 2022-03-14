import styles from './Drawer.module.scss'


function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className={styles.drawer}>
        <div className={styles.drawer__title}>
          <h2>Корзина</h2>
          <img src="./img/close.svg" alt="" />
        </div>

        <div className={styles.cartItems}>
          <div className={styles.cartItem}>
            <img
              className={styles.cartItem__sneakers}
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt=""
            />
            <div className={styles.cartItem__info}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <button className={styles.btn__reset}>
              <img
                className={styles.btn__remove}
                width={32}
                height={32}
                src="/img/close.svg"
                alt=""
              />
            </button>
          </div>
          <div className={styles.cartItem}>
            <img
              className={styles.cartItem__sneakers}
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt=""
            />
            <div className={styles.cartItem__info}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <button className={styles.btn__reset}>
              <img
                className={styles.btn__remove}
                width={32}
                height={32}
                src="/img/close.svg"
                alt=""
              />
            </button>
          </div>
          <div className={styles.cartItem}>
            <img
              className={styles.cartItem__sneakers}
              width={70}
              height={70}
              src="/img/sneakers/1.jpg"
              alt=""
            />
            <div className={styles.cartItem__info}>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <button className={styles.btn__reset}>
              <img
                className={styles.btn__remove}
                width={32}
                height={32}
                src="/img/close.svg"
                alt=""
              />
            </button>
          </div>
        </div>

        <div className={styles.drawer__info}>
          <ul className={styles.list__reset}>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className={styles.btn__reset + ' ' + styles.green__btn  }>
            Оформить заказ
            <img src="/img/arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
