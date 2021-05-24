import "./toBeDeleted/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import RegisterSuccess from "./components/RegisterSuccess";
import CreateProfile from "./components/CreateProfile";
import Home from "./components/Home";
import SavedLocationsMapView from "./components/SavedLocationsMapView";
import SearchPreferences from "./components/SearchPreferences";
import AccountSettings from "./components/AccountSettings";
import Explore from "./components/Explore";
import Connect from "./components/Connect";
import MessageCenter from "./components/MessageCenter";
import MessageCenterTrips from "./components/MessageCenterTrips";
import Chat from "./components/Chat";
import Profile from "./components/Profile";
import Plan from "./components/Plan";
import NewTrip from "./components/NewTrip";
import TripOverview from "./components/TripOverview";
import Calendar from "./components/Calendar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LogIn} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/success" component={RegisterSuccess} />
        <Route path="/createProfile" component={CreateProfile} />
        <Route path="/home" component={Home} />
        <Route
          path="/savedLocations-mapView"
          exact
          component={SavedLocationsMapView}
        />
        <Route path="/searchPreferences" component={SearchPreferences} />
        <Route path="/accountSettings" component={AccountSettings} />
        <Route path="/explore" component={Explore} />
        <Route path="/connect" component={Connect} />
        <Route path="/messageCenterFriends" component={MessageCenter} />
        <Route path="/messageCenterTrips" component={MessageCenterTrips} />
        <Route path="/chat" component={Chat} />
        <Route path="/profile" component={Profile} />
        <Route path="/plan" component={Plan} />
        <Route path="/tripOverview" component={TripOverview} />
        <Route path="/newTrip" component={NewTrip} />
        <Route path="/calendar" component={Calendar} />
      </Switch>
    </Router>
  );
}

export default App;
