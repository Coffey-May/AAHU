import { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Country, State, City } from "country-state-city";


const WeatherForm = ({ searchWeather, setCity, setCountry, countrys, setSelectedFlag, flag, setLatitude, setLongitude, city }) => {
  // const [isocode, setIsoCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  // const [selectedCity, setSelectedCity] = useState("");
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
  // {
  //   console.log("country", selectedCountry, states, cities, flag);
  // }

  // const filteredCity = () => cities.filter(c => {

  //   if (city == c.name) {
  //    setLatitude(c.latitude), setLongitude(c.longitude)
  //   }
  //   else{return}

  // })

  const handleCoords = () => {
    cities.filter((c )=>{
      // console.log(c.name, city)
      // alert("yeaah boy")
      if (c.name === city) {
      
        setLongitude(c.longitude);
        setLatitude(c.latitude);
          return 1
    }
    else { return 1 }
     
    }
    )
  
  }
  const handleFlag = () => {
 
    countries.filter(c => {
      if (c.isoCode === selectedCountry) {
        return   setSelectedFlag(c.flag)
     
      }
      else { return "" }
    })
    return
  }

  

  return (
    <Container>
 <div style={{display:'none'}}>{`${selectedState}`}</div>
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
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            setStates(State.getStatesOfCountry(e.target.value));


          }}
        >
          <option value="" selected disabled hidden>Choose Country</option>
          {countries.map((c) => (

            <option key={c.flag} value={c.isoCode} >
              {c.name}{c.flag}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => {
          setSelectedState(e.target.value);

            setCities(
              City.getCitiesOfState(`${selectedCountry}`, e.target.value));

           } }
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
            onClick={handleFlag(),handleCoords()}
            className="form-btn button" style={{ margin: "0 auto" }}>
            <span>Get Weather</span>
          </button>
        </div>
      </form>

    </Container>
  );
};

export default WeatherForm;
