//importing components
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Map from "./Components/Map.js";
import Nav from "./Components/Nav";
import Restaurant from "./Components/Restaurant";

//404 error handling
const NotFound = () => {
  return (
    <div>
      <h1>This page does not exist!</h1>
    </div>
  );
};

//App function that serves to index.html
function App() {
  return (
    <div>
      {/* Yelpington page title */}
      <h1>Yelpington</h1>
      <BrowserRouter>
        {/* Nav container */}
        <Nav />
        <Switch>
          <Route exact path="/" />
          <Route path="/restaurant/:id" component={Restaurant} />
          <Route path="" component={NotFound} />
        </Switch>
        {/* Map container */}
        <Map />
      </BrowserRouter>
    </div>
  );
}

//exporting the App component
export default App;
