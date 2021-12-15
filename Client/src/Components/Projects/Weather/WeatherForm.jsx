import React from 'react'

const WeatherForm = ({searchWeather,setCity,setCountry}) => {
    return (
     <form onSubmit={searchWeather} className='weatherInput' >
            <input
                onChange={(e)=> setCity(e.target.value)}
         type="text" name="city" placeholder="City..." />
            <input
                onChange={(e) => setCountry(e.target.value)}
                type="text" name="country" placeholder="Country..." />

        <div className="svg">
            <button className="form-btn button" style={{ margin: '0 auto' }}>
   
                {/* <svg>
                    <rect height="40" width="130"
                        fill="transparent" />
                </svg> */}
                <span>Get Weather</span>
   
            </button>
        </div>

    </form>
    )
}

export default WeatherForm
