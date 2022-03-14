import styles from "./Drawer.module.scss";

function Drawer({ onClose, items = [], onRemove}) {
  console.log(items.length)
  return (
    <div className="overlay">
      <div className={styles.drawer}>
        <div className={styles.drawer__title}>
          <h2>Корзина</h2>
          <img onClick={onClose} src="./img/close.svg" alt="" />
        </div>

        {items.length > 0 ? 
          <div className={styles.card__flex}>
            <div className={styles.cartItems}>
              {items.map((obj) => (
                <div className={styles.cartItem}>
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
                      src="/img/close.svg"
                      alt=""
                      onClick={() => onRemove(obj.id)}
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
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className={styles.btn__reset + " " + styles.green__btn}>
                Оформить заказ
                <img src="/img/arrow.svg" alt="" />
              </button>
            </div>
          </div> : 
          <div className={styles.card__empty}>
            <img className={styles.card__empty__img} src="./img/emptyCart.jpg" alt="" />
            <h2 className={styles.card__empty__title}>Корзина пустая</h2>
            <p className={styles.card__empty__info}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className={styles.btn__reset + " " + styles.green__btn}>
                Вернуться назад
                <img onClick={onClose} src="/img/arrow.svg" alt="" />
              </button>
          </div>
        }

      </div>
    </div>
  );
}

export default Drawer;
