import Navbar from "./Components/Nav/NavBar";
import Splash from "./Components/Splash/Splash";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MultiStep from "./Components/Projects/MultiStepForm/MultiStep";
import GroceryListApp from "./Components/Projects/GroceryList/GroceryListApp";
import { Recipe } from "./Components/Projects/RecipeFinder/Recipe";
import Weather from "./Components/Projects/Weather/WeatherApp";
import Paintings from "./Components/Projects/Paintings/Paintings";
import BonesMalone from "./Components/Projects/BonesMalone/BonesMalone";
import GraphQl from "./Components/Projects/GraphQl/GraphQl";
import DogNasium from "./Components/Projects/DogNasium/DogNasium";
import { Bp } from "./Components/Projects/BloodPressureMonitor/BP";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Splash} />
          <Route path="/recipe" component={Recipe} />
          <Route path="/multi-step-form" component={MultiStep} />
          <Route path="/groceries" component={GroceryListApp} />
          <Route path="/weather" component={Weather} />
          <Route path="/blood-pressure-monitor" component={Bp} />
          <Route path="/ContemporaryRealism" component={Paintings} />
          <Route path="/BonesMalone" component={BonesMalone} />
          <Route path="/GraphQl" component={GraphQl} />
          <Route path="/DogNasium" component={DogNasium} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
