function Card() {
  return (
    <div className="card">
      <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
      <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className="card__info">
        <div className="card__price">
          <span>Цена:</span>
          <b>12999$</b>
        </div>
        <button className="btn-reset">
          <img width={32} height={32} src="/img/add.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
