import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
let apiKey = process.env.REACT_APP_MAPBOX_TOKEN


export default function Map({ latitude, longitude, flag, city }) {
     const [selectedCity, setSelectedCity] = useState("");
    const [open, setOpen] = useState(false);
    const [viewport, setViewport] = useState({
        latitude:0,
        longitude: 0,
        width: "30em",
        height: "17em",
        zoom:0
    });


   
    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedCity(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, [latitude, longitude, city]);

  
    console.log(viewport)
    return (
        <div>

            <ReactMapGL


                {...viewport}
                mapboxApiAccessToken={`${apiKey}`}
                mapStyle="mapbox://styles/coffeymay/ckxur2e8q29wh14lfgc2xrdxf"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                {/* {parkDate.features.map(park => ( */}
                <Marker
                    // key={park.properties.PARK_ID}
                    latitude={parseInt(latitude)}
                    longitude={parseInt(longitude)}

                >
                    <button
                        style={{textAlign:'left', backgroundColor: "transparent", color: 'white', border: 'none' }}
                        onClick={e => {
                            e.preventDefault();
                            setSelectedCity(city);
                        }}
                    >
                        city: {city}<br></br>
                        latitude:{latitude}<br></br>
                        longitude:{longitude}<br></br>
                        flag:{flag}

                    </button>
                </Marker>


                {city && !open ? (
                    <Popup
                        latitude={parseInt(latitude)}
                        longitude={parseInt(longitude)}
                        onClose={() => {
                            setOpen(!open)
                        }}
                    >
                        {/* <div>
              <h2>{selectedCity}</h2>
            </div> */}
                        {city}
                    </Popup>
                ) : null}
            </ReactMapGL>
        </div>
    );
}