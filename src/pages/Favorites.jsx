import Card from "../components/Card";
import React  from "react";
import {AppContext} from '../App'

function Favorites(props) {

  const {favorites,  onAddToFavorite} = React.useContext(AppContext) 
  return (
    <div className="content">
      <div className="content__info">
        <h1>
          Мои закладки
        </h1>
      </div>

      <div className="sneakers">
        {favorites.map((obj, index) => (
            <Card
              key={obj.id}
              title={obj.title}
              id = {obj.id}
              price={obj.price}
              imageUrl={obj.imageUrl}
              favorited = {true}
              onFavorite={onAddToFavorite}
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
