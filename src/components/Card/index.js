import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import { AppContext } from "../../App";

function Card(props) {
  
  const [isFavorite, setIsFavorite] = React.useState(props.favorited);
  const { isItemAdded } = React.useContext(AppContext)

  // console.log(props.title , isItemAdded(props.id));

  const onClickPlus = () => {
    props.onPlus(props);

  };
  const onClickFavorite = () => {
    props.onFavorite(props);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {props.loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={210}
          viewBox="0 0 210 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="3" y="27" rx="10" ry="10" width="150" height="91" />
          <rect x="116" y="79" rx="0" ry="0" width="0" height="2" />
          <rect x="3" y="136" rx="5" ry="5" width="150" height="15" />
          <rect x="7" y="168" rx="6" ry="6" width="95" height="15" />
          <rect x="7" y="210" rx="5" ry="5" width="80" height="25" />
          <rect x="116" y="206" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            <img
              src={
                isFavorite
                  ? "../../img/heart-liked.svg"
                  : "../../img/heart-unliked.svg"
              }
              alt="heart"
              onClick={onClickFavorite}
            />
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
                isItemAdded(props.id)
                  ? "../../img/btn-cheked.svg"
                  : "../../img/btn-uncheked.svg"
              }
              alt=""
              onClick={onClickPlus}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
