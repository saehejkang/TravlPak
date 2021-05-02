<<<<<<< Updated upstream
import './toBeDeleted/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import "./toBeDeleted/App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import LogIn from "./components/LogIn";
import Register from "./components/Register";
import RegisterSuccess from "./components/RegisterSuccess";
import CreateProfile from "./components/CreateProfile";
import Home from "./components/Home";
import SavedLocationsMapView from "./components/SavedLocationsMapView";
import SearchPreferences from "./components/SearchPreferences";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LogIn}/>
        <Route path="/login" component={LogIn}/>
        <Route path="/signup" component={Register}/>
        <Route path="/registerSuccess" component={RegisterSuccess}/>
        <Route path="/createProfile" component={CreateProfile}/>
        <Route path="/home" component={Home}/>
        <Route path="/savedLocations-mapView" exact component={SavedLocationsMapView}/>
        <Route path="/searchPreferences" component={SearchPreferences}/>
      </Switch>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
