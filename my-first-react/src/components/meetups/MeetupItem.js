import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";
//<li> is a list item
//How every List item should look like

function MeetupItem(props) {
  const favContext =  useContext(FavoritesContext)

  const itemIsFavorite = favContext.IsItemFavorites(props.id);
  function toggleFavoritesStatusHandler(){
      if(itemIsFavorite){
        favContext.removeFavorites(props.id);
      }else{
        favContext.addFavorites({
          id:props.id,
          title:props.title,
          description:props.description,
          image:props.image,
          address:props.address
        })
      }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title} </h3>
          <address>{props.address}</address>
          <p>{props.description} </p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? "Remove from Favorites":"To Favorites"}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
