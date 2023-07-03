import MeetupList from "../components/meetups/MeetupList";
import {useState,useEffect} from 'react';
//useEffect runs some code if conditions are met
//<section> tag is a semantic tag that is used to define a section in an HTML document.
//diference between div and section is that section is a semantic tag that is used to define a section in an HTML document.
//The <section> tag defines sections in a document, such as chapters, headers, footers, or any other sections of the document.
//div is a container for HTML elements. The <div> tag is used to group block-elements to format them with CSS.
function AllMeetupsPage() {
  const [isLoading,setIsLoading] = useState(true);
  const [loadedMeetups,setLoadedMeetups] =  useState([]);

  useEffect(()=>{
    setIsLoading(true);

    fetch("https://react-app-bbd8d-default-rtdb.firebaseio.com/meetups.json")//fetches from api.
    .then(response=>{
      return response.json();
    }).then(data=>{

      const meetups = [];

      for( const key in  data){
        const meetup ={
          id:key,
          ...data[key] //copies data into the meetup(spread)
        };

        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups)
    });

  },[]);//second arguments for conditions.

  if(isLoading){
    return(
      <section>
        <p>Loading...</p>
        </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
