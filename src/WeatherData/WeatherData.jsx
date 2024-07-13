import React from 'react'
import "./WeatherData.css"
import axios from "axios"



const Weather = () => {

  const [data, setData] = React.useState({})
  const [location, setLocation] = React.useState("")
  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c73e6df6a5e5b9702ea5b3f50a6de072`

  const searchLocation = async(event) => {
    if (event.key === "Enter") {
      
      try
      {
        const res =await axios.get(url)
        setData(res.data)
        setLocation("")
        console.log(res.data)

        if(res.status === 404)
        {
          alert("city not available")
          console.log(res.data)
        }
      }

      catch(err)
      {
        console.log(err)
      }
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
        <div>
          <p className='location'>{data.name}</p>
        </div>
        <div>
         {data.main ? <h2 className='temp'>{data.main.temp} °c</h2> : null}
        </div>
        <div>
          {data.weather ? <p className='description'>{data.weather[0].main}</p> : null}
        </div>
        </div>

        <div className='bottom'>

          <div className='feels'>
            {data.main ? <p className='bold'>{data.main.feels_like} °F</p> : null}
            {data.main ? <p>Feels Like</p> : null }
            
          </div>

          <div className='humidity'>
            {data.main ? <p className='bold'> {data.main.humidity}%</p> : null}
            {data.main ? <p>Humidity</p> : null}
            
          </div>

          <div className='wind'>
            {data.wind ? <p className='bold'>{data.wind.speed}MPH</p> : null}
            {data.wind ? <p>Wind Speed</p> : null}
            
          </div>

        </div>
        </div>

    </div>
  )
}

export default Weather