import {useContext} from 'react';
 import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList"

function FavoritePage() {

  const favsContext = useContext(FavoritesContext);

  let context;

  if(favsContext.totalFavorites===0){
    context = <p>Add Some Favorites</p>
  }else {
    context = <MeetupList meetups={favsContext.favorites}/>
  }

  return <section>
    <h1>My Favorites</h1>
    {context}
    </section>
}

export default FavoritePage;
