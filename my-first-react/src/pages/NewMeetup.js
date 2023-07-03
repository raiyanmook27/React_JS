import {useNavigate} from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();
  //api post,get
  function addMeetupHandler(meetupData){
    //const navigate = useNavigate(); //local navigation
    fetch("https://react-app-bbd8d-default-rtdb.firebaseio.com/meetups.json",//fetches from api.
     {
      method:"POST",
      body: JSON.stringify(meetupData),
      headers:{
        "Content-Type":"application/json"
      }
     }
    ).then(()=>{
      //replace prevents you from going back a page
      navigate("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
