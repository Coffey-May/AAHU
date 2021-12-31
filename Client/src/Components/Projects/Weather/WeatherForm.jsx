import { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Country, State, City } from "country-state-city";

const WeatherForm = ({ searchWeather, setCity, setCountry, countrys }) => {
  const [isocode, setIsoCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);

  // const getCitiesOfCountry = City.getCitiesOfCountry("AU")
  // console.log(getCitiesOfCountry)
  useEffect(() => {
    const fetchCountries = async () => {
      let countriesList = await Country.getAllCountries();
      setCountries(countriesList);
    };
    fetchCountries();
  }, [countries]);
  {
    console.log("country", selectedCountry, states, cities);
  }

  return (
    <Container>
      <form
        style={{ padding: "4em", position: "absolute", marginTop: "-33vh" }}
        onSubmit={searchWeather}
        className="weatherInput"
      >
        {/* <input
                    onChange={(e) => setCountry(e.target.value)}
                    type="text" name="country" placeholder="Country..." />
  */}
        <select 
          onChange={(e) => (
            setSelectedCountry(e.target.value),
            // setSelectedCity(''),
            // setSelectedState(''),
            setStates(State.getStatesOfCountry(e.target.value))
          )}
              >
                     <option value="" selected disabled hidden>Choose Country</option>
                  {countries.map((c) => (
            
            <option key={c.flag} value={c.isoCode}>
              {c.name}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => (
            setSelectedState(e.target.value),
            setCities(
              City.getCitiesOfState(`${selectedCountry}`, e.target.value)
            )
          )}
        >
          {states.map((c) => (
            <option key={c.name} value={c.isoCode}>
              {c.name}
            </option>
          ))}
        </select>
        <select onChange={(e) => setCity(e.target.value)}>
          {cities.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
        {/* <input
                    onChange={(e) => setCity(e.target.value)}
                    type="text" name="city" placeholder="City..." /> */}
        <div className="svg">
          <button className="form-btn button" style={{ margin: "0 auto" }}>
            <span>Get Weather</span>
          </button>
        </div>
      </form>
    </Container>
  );
};

export default WeatherForm;
