import React from 'react'
import "./WeatherData.css"
import axios from "axios"



const Weather = () => {

  const [data, setData] = React.useState({})
  const [location, setLocation] = React.useState("")
  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c73e6df6a5e5b9702ea5b3f50a6de072`

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      
      axios.get(url)
        .then((res) => {
          setData(res.data)
          console.log(res.data)
          setLocation("")
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }
  }
  

  return (
    <div className='container'>

      <input className='input'
        value={location}
        onChange={e => setLocation(e.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter City' />

      <div className='content'>

        <div className='top'>
          <p className='location'>{data.name}</p>
         {data.main ? <h1 className='temp'>{data.main.temp} °F</h1> : null}
          {data.weather ? <p className='description'>{data.weather[0].main}</p> : null}
        </div>

        <div className='bottom'>

          <div className='feels'>
            {data.main ? <p className='bold'>{data.main.feels_like} °F</p> : null}
            <p>Feels Like</p>
            
          </div>

          <div className='humidity'>
            {data.main ? <p className='bold'> {data.main.humidity}%</p> : null}
            <p>Humidity</p>
            
          </div>

          <div className='wind'>
            {data.wind ? <p className='bold'>{data.wind.speed}MPH</p> : null}
            <p>Wind Speed</p>
            
          </div>

        </div>
        </div>

    </div>
  )
}

export default Weather