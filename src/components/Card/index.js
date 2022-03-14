import React from "react";
import styles from "./Card.module.scss";



function Card(props) {
  const [isCheked, setIsCheked] = React.useState(false);

  const onClickPlus = () => {
    props.onPlus(props)
    setIsCheked(!isCheked);
  };



  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="../../img/heart.svg" alt="heart" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="" />
      <p>{props.title}</p>
      <div className={styles.card__info}>
        <div className={styles.card__price}>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <img
          className={styles.card__btn}
          width={32}
          height={32}
          src={
            isCheked ? "../../img/btn-cheked.svg" : "../../img/btn-uncheked.svg"
          }
          alt=""
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}

export default Card;
