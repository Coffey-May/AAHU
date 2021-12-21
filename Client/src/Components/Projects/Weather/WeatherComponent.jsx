import React from 'react'
import Pic from '../Weather/WeatherImages/weathergif.gif'
import Pic2 from '../Weather/WeatherImages/cloudygif.gif'
import Pic3 from '../Weather/WeatherImages/raingif.gif'
import Pic4 from '../Weather/WeatherImages/snowgif.gif'
import Pic5 from '../Weather/WeatherImages/foggif.gif'
import Container from '@material-ui/core/Container'
var image;
function imageFilter(x) {

    if (x === "light rain" || x === "moderate rain" || x === "heavy intensity rain" || x === "very heavy rain" || x === "extreme rain" || x === "light intensity shower rain" || x === "freezing rain" || x === "shower rain" || x === "heavy intensity shower rain" || x === "	ragged shower rain" || x === "light intensity drizzle") {
        image = Pic3
    }
    else if (x === "clear sky") {
        image = Pic
    }
    else if (x === 'scattered clouds' || x === 'overcast clouds' || x === 'broken clouds' || x === 'few clouds') {
        image = Pic2
    }
    else if (x === "light snow" || x === "snow" || x === "heavy snow" || x === "sleet" || x === "light shower sleet" || x === "shower sleet" || x === "light rain and snow" || x === "rain and snow" || x === "light shower snow" || x === "shower snow" || x === "heavy shower snow") {
        image = Pic4
    }
    else if (x === "mist" || x === "smoke" || x === "haze" || x === "fog" || x === "dust" || x === "volcanic ash" || x === "squalls" || x === "tornado" || x === "	sand/ dust whirls" || x === "sand") {
        image = Pic5
    }

}
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

// var time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });

const WeatherComponent = ({time,temperature,humidity,city,country,description,error}) => {
    return (
         <div style={{ marginTop:'-13vh',  display: "flex", FlexDirection: 'row', flexWrap: 'wrap', overflow: '  scroll' }} className="weather__info">
<Container>
            <div style={{padding:'4em',backgroundColor:'rgba(0,0,0,0.7)', color:'white', top: '13vh', position: 'absolute', paddingTop: '2em', width: '80vw',height:'80vh', fontSize: '1em', margin: '0 auto' }}>
                 <hr />
            <h2 style={{ margin: '0 auto' }}>Currently: {time}<br />{date} </h2>
           


            {
                city && country &&
                <h2 style={{ margin: '0 auto' }} className="weather__key"> Location:
                    <span className="weather__value"> {city}, {country}</span>
                </h2>
            }

            {
                temperature && <h3 style={{ margin: '0 auto' }} className="weather__key"> Temperature:
                    <span className="weather__value"> {temperature} °F	</span>
                </h3>
            }

            {
                humidity && <h3 style={{ margin: '0 auto' }} className="weather__key"> Humidity:
                    <span className="weather__value"> {humidity}% </span>
                </h3>
            }

            {

                description && <h2 style={{ margin: '0 auto' }} className="weather__key"> Conditions:
                    <span className="weather__value"> {description} </span>
                </h2>
            }
                </div>
                </Container>
        <div>
            {imageFilter(description)}
            {
                <div >
                    <img
                        style={{ objectFit: 'cover',height: '100vh',width:'100vw', backgroundSize:'cover'}} src={image} alt="gif that shows weather condition" />
                </div>
            }

        </div>
        {
            error && <h3 style={{ marginLeft: '3em' }} className="weather__error">{error}</h3>
        }
 
    </div>
    )
}

export default WeatherComponent
