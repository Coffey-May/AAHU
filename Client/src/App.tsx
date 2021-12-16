import Navbar from "./Components/Nav/NavBar";
import Splash from "./Components/Splash/Splash";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MultiStep from "./Components/Projects/MultiStepForm/MultiStep";
import GroceryListApp from "./Components/Projects/GroceryList/GroceryListApp";
import { Recipe } from "./Components/Projects/RecipeFinder/Recipe";
import Weather from "./Components/Projects/Weather/WeatherApp";

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
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
