import styles from './Card.module.scss'

function Card(props) {
  return (
    <div className={styles.card}>
      <img width={133} height={112} src={props.imageUrl} alt="" />
      <p>{props.title}</p>
      <div className={styles.card__info}>
        <div className={styles.card__price}>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className={styles.card__btn}>
          <img width={32} height={32} src="/img/add.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
