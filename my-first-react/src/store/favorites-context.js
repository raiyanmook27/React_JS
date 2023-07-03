import { createContext ,useState} from "react";


const FavoriteContext = createContext({
    favorites:[],
    totalFavorites:0,
    addFavorites: (meetupId)=>{},
    removeFavorites: (meetupId)=>{},
    IsItemFavorites: (meetupId)=>{},
}); // creates a context for the whole app


//can provide a context/state of the Favorites to other components.
export function FavoritesContextProvider(props){
    const [userFavorites , setUserFavorites]=useState([]);

    function addFavoritesHandler(favoriteMeetup){
        setUserFavorites((previousFavs)=>{
            return previousFavs.concat(favoriteMeetup);
        });
    }
    
    function removeFavoritesHandler(meetupId){
        setUserFavorites(prevFavs =>{
            return prevFavs.filter(meetup=>meetup.id!==meetupId);
        })
    }
    
    function IsItemFavoritesHandler(meetupId){
        return userFavorites.some(meetup=>meetup.id===meetupId);// item exist
    }
    const context ={
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorites:addFavoritesHandler,
        removeFavorites:removeFavoritesHandler,
        IsItemFavorites:IsItemFavoritesHandler
    };



    return <FavoriteContext.Provider value={context}>
        {props.children}
        </FavoriteContext.Provider>
} 
export default FavoriteContext;