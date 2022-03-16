import React from "react";
import { AppContext } from "../App";

import styles from '../components/Drawer/Drawer.module.scss'

const Info = ({image , title,descr}) => {
    

    const {setCartOpened} = React.useContext(AppContext)

    

  return (
    <div className={styles.cart__empty}>
      <img
        className={styles.cart__empty__img}
        src={image}
        alt=""
      />
      <h2 className={styles.cart__empty__title}>{title}</h2>
      <p className={styles.cart__empty__info}>
        {descr}
      </p>
      <button
        onClick={() => setCartOpened(false)}
        className={styles.btn__reset + " " + styles.green__btn}
      >
        Вернуться назад
        <img src="/img/arrow.svg" alt="" />
      </button>
    </div>
  );
};

export default Info;
