import React, { useState, useEffect } from "react";
import Form from "./WeatherForm";
// import WForm from './WForm';

import WeatherComponent from "./WeatherComponent";

const API_KEY = process.env.REACT_APP_API_KEY;
const url = "https://api.openweathermap.org";

let initialState = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined,
};

const WeatherApp = () => {
  const [wData, setWData] = useState(initialState);
  const [country, setCountry] = useState("Afghanistan");
  const [city, setCity] = useState("");

  console.log("render");

  useEffect(() => {
    // console.log("render")
    const getWeather = async () => {
      const res = await fetch(
        `${url}/data/2.5/weather?q=Nashville,US&appid=${API_KEY}&units=imperial`
      );
      const data = await res.json();
      setWData({
        time: timeConverter(data.dt),
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: undefined,
      });
    };
    getWeather();
  }, []);

  const searchWeather = async (e) => {
    e.preventDefault();

    // const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    console.log("in:", country, city);

    const api_call = await fetch(
      `${url}/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
    );

    const data = await api_call.json();

    //   console.log(timeConverter(data.dt));

    //     console.log(data.timezone);
    //   console.log()
    try {
      if (city && country) {
        setWData({
          time: timeConverter(data.dt),
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: "",
        });
      } else {
        setWData({
          time: undefined,
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter the values.",
        });
      }
    } catch (error) {
      console.log(error);
      setWData({
        error: "Please check spelling",
      });
    }
  };

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  }

  return (
    <div style={{ paddingTop: "13vh" }}>
      <WeatherComponent
        time={wData.time}
        temperature={wData.temperature}
        humidity={wData.humidity}
        city={wData.city}
        country={wData.country}
        description={wData.description}
        error={wData.error}
      />

      <Form
        country={country}
        city={city}
        data={wData}
        searchWeather={searchWeather}
        setCity={setCity}
        setCountry={setCountry}
      />
      {/* <WForm/> */}
    </div>
  );
};

export default WeatherApp;
