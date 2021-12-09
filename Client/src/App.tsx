import Navbar from "./Components/Nav/NavBar";
// import Home from './Components/Home/Home';
import Splash from "./Components/Splash/Splash";
import Footer from "./Components/Footer/Footer";
// import { useStyles } from "./styles";
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MultiStep from "./Components/Projects/MultiStepForm/MultiStep";
import GroceryListApp from './Components/Projects/GroceryList/GroceryListApp';
import { Recipe } from "./Components/Projects/RecipeFinder/Recipe"

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
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
