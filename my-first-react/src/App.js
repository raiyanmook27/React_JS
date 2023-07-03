import { Route, Routes } from "react-router-dom"; // import Route which is a component
//that we can use to define a route
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

// switch is a component that allows us to define a group of routes and
//it will make sure that only one of these routes is loaded at a time
//so that we don't have multiple pages loaded at the same time
function App() {
  return (
    <Layout>
      <switch>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </switch>
    </Layout>
  );
}

export default App;
