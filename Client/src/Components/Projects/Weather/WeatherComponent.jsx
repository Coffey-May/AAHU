import React from "react";
import Pic from "../Weather/WeatherImages/weathergif.gif";
import Pic2 from "../Weather/WeatherImages/cloudygif.gif";
import Pic3 from "../Weather/WeatherImages/raingif.gif";
import Pic4 from "../Weather/WeatherImages/snowgif.gif";
import Pic5 from "../Weather/WeatherImages/foggif.gif";
import Container from "@material-ui/core/Container";
var image;
function imageFilter(x) {
  if (
    x === "light rain" ||
    x === "moderate rain" ||
    x === "heavy intensity rain" ||
    x === "very heavy rain" ||
    x === "extreme rain" ||
    x === "light intensity shower rain" ||
    x === "freezing rain" ||
    x === "shower rain" ||
    x === "heavy intensity shower rain" ||
    x === "	ragged shower rain" ||
    x === "light intensity drizzle"
  ) {
    image = Pic3;
  } else if (x === "clear sky") {
    image = Pic;
  } else if (
    x === "scattered clouds" ||
    x === "overcast clouds" ||
    x === "broken clouds" ||
    x === "few clouds"
  ) {
    image = Pic2;
  } else if (
    x === "light snow" ||
    x === "snow" ||
    x === "heavy snow" ||
    x === "sleet" ||
    x === "light shower sleet" ||
    x === "shower sleet" ||
    x === "light rain and snow" ||
    x === "rain and snow" ||
    x === "light shower snow" ||
    x === "shower snow" ||
    x === "heavy shower snow"
  ) {
    image = Pic4;
  } else if (
    x === "mist" ||
    x === "smoke" ||
    x === "haze" ||
    x === "fog" ||
    x === "dust" ||
    x === "volcanic ash" ||
    x === "squalls" ||
    x === "tornado" ||
    x === "	sand/ dust whirls" ||
    x === "sand"
  ) {
    image = Pic5;
  }
}
var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

// var time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });

const WeatherComponent = ({
  time,
  temperature,
  humidity,
  city,
  country,
  description,
  error,
}) => {
  return (
    <div
      style={{
        marginTop: "-13vh",
        display: "flex",
        justifyContent: "space-around",
        FlexDirection: "row",
        flexWrap: "wrap",
        overflow: "  scroll",
      }}
      className="weather__info"
    >
      {/* <Container> */}
      <div
        style={{
          margin: "8em",
          padding: "4em",
          backgroundColor: "rgba(0,0,0,0.7)",
          color: "white",
          position: "absolute",
        //   paddingTop: "1em",
          height: "80vh",
          width: "90vw",
          fontSize: "1em",
        }}
          >
              <div >
                  <h1 style={{
                     
                      textShadow: 'inset -10px 14px 21px -4px rgba(255, 255, 255, 0.753)',
   'inset 17px -22px 21px -4px rgba(0, 0, 0, 0.46)':
    '1px 16px 29px 9px rgba(0, 0, 0, 0.932)',
  color: 'rgba(70,70,70,0.7)',
//   background: 'rgba(0,0,0,0.0)',
  textTransform: 'uppercase',
                      textShadow: '-3px 3px 4px rgba(0, 0, 0), 2px -2px 6px rgb(255, 255, 255,0.7)',
                      fontSize: '7vw',
                      margin: '0 0 0 0',
                      textAlign:'center'
                  }}>FORECASTER PLUS <b>+</b> </h1>
                  </div>
        <hr />
        <h2 style={{ margin: "0 auto" }}>
          Currently: {time}
          <br />
          {date}{" "}
        </h2>

        {city && country && (
          <h2 style={{ margin: "0 auto" }} className="weather__key">
            {" "}
            Location:
            <span className="weather__value">
              {" "}
              {city}, {country}
            </span>
          </h2>
        )}

        {temperature && (
          <h3 style={{ margin: "0 auto" }} className="weather__key">
            {" "}
            Temperature:
            <span className="weather__value"> {temperature} °F </span>
          </h3>
        )}

        {humidity && (
          <h3 style={{ margin: "0 auto" }} className="weather__key">
            {" "}
            Humidity:
            <span className="weather__value"> {humidity}% </span>
          </h3>
        )}

        {description && (
          <h2 style={{ margin: "0 auto" }} className="weather__key">
            {" "}
            Conditions:
            <span className="weather__value"> {description} </span>
          </h2>
        )}
      </div>
      {/* </Container> */}
      {/* <div> */}
      {imageFilter(description)}
      {
        // <div >
        <img
          style={{
            objectFit: "cover",
            height: "100vh",
            width: "100vw",
            backgroundSize: "cover",
          }}
          src={image}
          alt="weather-conditions"
        />
        //  </div>
      }

      {/* </div> */}
      {error && (
        <h3
          style={{
            marginLeft: "3em",
            marginTop: "-35vh",
            color: "rgbaa(200,50,50)",
          }}
        >
          {error}
        </h3>
      )}
    </div>
  );
};

export default WeatherComponent;
