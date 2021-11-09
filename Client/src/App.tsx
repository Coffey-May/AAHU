import Navbar from "./Components/Nav/NavBar";
// import Home from './Components/Home/Home';
import Splash from "./Components/Splash/Splash";
import Footer from "./Components/Footer/Footer";
import { useStyles } from "./styles";
import { useAuth0 } from '@auth0/auth0-react';




function App() {
  const styles = useStyles();

  return (
    <>
      
        <Navbar />
       
        <Splash />
       
        <Footer />
     
      
    </>
  );
}

export default App;
