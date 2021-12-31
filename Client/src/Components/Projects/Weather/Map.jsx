import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import * as parkDate from "./data/skateboard-parks.json";
let apiKey = process.env.REACT_APP_MAPBOX_TOKEN
 

 let park = {
      "type": "Feature",
    //   "properties": {
    //     "PARK_ID": 653,
    //     "FACILITYID": 28008,
    //     "NAME": "Roving Skateboard Park Location",
    //     "NAME_FR": "Lieu de planchodrome itinérant",
    //     "ADDRESS": "5660 Osgoode Main Street",
    //     "ADDRESS_FR": "5660, rue Osgoode Main",
    //     "FACILITY_T": "other",
    //     "FACILITY_1": "autre",
    //     "ACCESSCTRL": "no/non",
    //     "ACCESSIBLE": "no/non",
    //     "OPEN": null,
    //     "NOTES": "Outdoor - Mobile",
    //     "MODIFIED_D": "2018/01/18",
    //     "CREATED_DA": null,
    //     "FACILITY": "Osgoode Community Centre - Roving Skateboard Park Location",
    //     "FACILITY_F": "Centre communautaire d'Osgoode - Lieu de planchodrome itinérant",
    //     "DESCRIPTIO": "Flat surface, 5 components",
    //     "DESCRIPT_1": "Surface plane, 5 modules",
    //     "PICTURE_LI": null,
    //     "PICTURE_DE": null,
    //     "PICTURE__1": null
    //   },
      "geometry": {
        "type": "Point",
        "coordinates": [
          74.0060,
          40.7128
        ]
      }
    }



export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 74.0060,
    longitude: 40.7128,
    width: "100vw",
      height: "80vh",
 
    zoom: 1
  });
  const [selectedPark, setSelectedPark] = useState(`${park}`);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

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
             latitude={74.0060}
                      longitude={40.7128}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
                >
                    kdfbfkjb
              {/* <img src="/skateboarding.svg" alt="Skate Park Icon" /> */}
            </button>
          </Marker>
        {/* ))} */}

        {selectedPark ? (
          <Popup
            latitude={74.0060}
                      longitude={40.7128}

            onClose={() => {
              setSelectedPark(null);
            }}
          >
            {/* <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div> */}
                      kjfbnfjbkfjd
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}