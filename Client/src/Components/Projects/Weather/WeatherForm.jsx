import { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
// import { Country, State, City } from "country-state-city";
import { Country, State, City } from 'country-state-city';
// import Country from "country-state-city ";
// import State from "country-state-city";
// import City from "country-state-city";
// import State from "country-state-city";
// import City from "country-state-city";



const WeatherForm = ({ searchWeather, setCity, setSelectedFlag, setLatitude, setLongitude, city }) => {
  const [isocode, setIsoCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  // const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);



  useEffect(() => {
    const fetchCountries = async () => {
      let countriesList = Country.getAllCountries();
      setCountries(countriesList);
    };
    fetchCountries();
  }, [countries]);
  // {
  // console.log("country", selectedCountry, states, cities, flag);
  // }

  // const filteredCity = () => cities.filter(c => {

  //   if (city == c.name) {
  //    setLatitude(c.latitude), setLongitude(c.longitude)
  //   }
  //   else{return}

  // })
  let coords
  const handleCoords = () => {

    coords = cities.filter((c) => {

      if (c.name === city) {
        setLongitude(c.longitude);
        setLatitude(c.latitude);
      }
      return coords
    })

  }
  const handleFlag = () => {

    countries.filter(c => {
      if (c.isoCode === selectedCountry) {
        return setSelectedFlag(c.flag)

      }
      else { return "" }
    })
    return
  }

  //  console.log("REACHED", State.getStatesOfCountry("IN"))



  const handleCountry = async (e) => {
    
    // setSelectedCountry(e.target.value)
    

    // setSelectedCountry((prevState) => {
    //   return e.target.value
    // });

    // console.log(selectedCountry)

      // let chosenCountry = countries.filter(c => { return c.isoCode === selectedCountry })
      //  setStates(State.getStatesOfCountry(chosenCountry[0].isoCode));
 
    // console.log(chosenCountry)
 
 
  }
   console.log(selectedCountry)
    const handleState = async (e) => {
    setSelectedState(e.target.value);
    console.log(selectedState)
    let chosenState = await State.getCitiesOfState().filter(c => { return c.stateCode === selectedState })
      console.log(chosenState)
      // setCities(
      //          City.getCitiesOfState(`${selectedCountry}`, e.target.value));
    // setCities(State.getStatesOfCountry(chosenCountry[0].isoCode));
    // console.log(states)
  }
  return (
    <Container>
      <div style={{ display: 'none' }}>{`${selectedState}`}</div>
      <form
        style={{ position: "absolute", marginTop: "-33vh", display: 'flex', flexDirection: ' column' }}
        onSubmit={searchWeather}
        className="weatherInput"
      >
        {/* <input
                    onChange={(e) => setCountry(e.target.value)}
                    type="text" name="country" placeholder="Country..." />
  */}

        <select onChange={(e) => {
          setSelectedCountry(e.target.value);
          console.log(selectedCountry)
          console.log(countries.filter(c => { return c.isoCode === selectedCountry}))
          let chosenCountry = countries.filter(c => { return c.isoCode === selectedCountry });
            setStates(State.getStatesOfCountry(chosenCountry[0].isoCode));
        }}>
          <option value=""  >Choose Country</option>
          {countries.map((c) => (

            <option key={c.name} value={c.isoCode} >
              {c.name}{c.flag}
            </option>
          ))}
        </select>

        <select
          onChange={handleState}
          // onChange={(e) => {
          //   setSelectedState(e.target.value);
          //   setCities(
          //     City.getCitiesOfState(`${selectedCountry}`, e.target.value));
          // }}
        >
          {states.map((c) => (
            <option key={c.name} value={c.isoCode} onChange={(e) => { setLatitude(c.latitude); setLongitude(c.longitude); }
            }  >
              {c.name}
            </option>
          ))}
        </select>

        <select onChange={(e) => setCity(e.target.value)

        }>
          {cities.map((c) => (
            <option key={c.name} value={c.name}
              onChange={(e) => { setLatitude(c.latitude); setLongitude(c.longitude); }
              }>
              {c.name}
            </option>
          ))}
        </select>
        {/* <input
                    onChange={(e) => setCity(e.target.value)}
                    type="text" name="city" placeholder="City..." /> */}
        <div className="svg">
          <button
            onClick={(e) => { handleFlag(); handleCoords(); }}
            className="form-btn button" style={{ margin: "0 auto" }}>
            <span>Get Weather</span>
          </button>
        </div>
      </form>

    </Container>
  );
};

export default WeatherForm;
