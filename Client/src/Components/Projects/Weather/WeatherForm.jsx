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
  // const [isocode, setIsoCode] = useState("");
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


  }, [countries, selectedCountry]);
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

 let chosenCountry

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

        <select
          onChange={async (e) => {
           chosenCountry = await countries.filter(c => { return c.isoCode === e.target.value });
          // console.log(chosenCountry[0].isoCode)
            setSelectedCountry(chosenCountry[0].isoCode)
          setStates(State.getStatesOfCountry(chosenCountry[0].isoCode));
          console.log(states)
        }}>
          <option value="" >Choose Country</option>
              {countries.map((c) => (
              <option key={c.name} value={c.isoCode} >
               {c.name}{c.flag}
              </option>
            ))}
        </select>

        <select
            onChange={async (e) => {
            console.log(e.target.value)
            let chosenState = await states.filter(s => { return s.isoCode === e.target.value });

            console.log("chosenState", chosenState[0].isoCode);
            setSelectedState(e.target.value);
            console.log(selectedCountry)
            setCities(
              City.getCitiesOfState(`${selectedCountry}`,e.target.value));
            console.log(cities)

            // setSelectedState(e.target.value);
            // setCities(
            //   City.getCitiesOfState(`${selectedCountry}`, e.target.value));
          }}
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
