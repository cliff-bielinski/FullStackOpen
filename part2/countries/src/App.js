import axios from 'axios'
import React, { useState, useEffect } from 'react'

/* 
  Handles user input for searching countries by name.
  Sets user input to 'filter' state which is used by
  Display to filter out country results.
*/
const Search = ({ filter, setFilter, handleSearch }) => {
  return (
    <form>
      <div>find countries 
        <input value={filter} onChange={handleSearch} />
      </div>
    </form>
  )
}

const Results = ({ countries , filter, setFilter }) => {
  const results = countries.filter(country => 
    country.name.common
    .toLowerCase()
    .includes(filter.toLowerCase())
  )

  const handleShow = (event) => setFilter(event.target.id)

  if (!filter || !results.length) return <div>No results</div>
  
  else if (results.length == 1) return <Display country={results[0]}/>

  else if (results.length <= 10) {
    return (
      <>
        {results.map(result => 
          <div key={result.name.common}>
            {result.name.common}
            <button id={result.name.common} onClick={handleShow}>
              show
            </button>
          </div>
        )}
      </>
    )
  }

  else return <div>Too many matches</div>
}

const Display = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        Capital: {country.capital} <br />
        Population: {country.population}
      </div>
      <h2>Languages</h2>
      <ul>
        {Object.entries(country.languages).map(language =>
          <li key={language[0]}>{language[1]}</li>
        )}
      </ul>
      <img src={country.flags.png} />
      <Weather country={country} />
    </div>
  )
}

const Weather = ({ country }) => {
  const [weather, setWeather] = useState('')
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`)
      .then(response => {
        setWeather(response.data)
      })
  }, [])

  if (!weather) return null
  
  return(
    <div>
      <h2>Weather in {country.capital}</h2>
      <div><b>Temperature: </b> {weather.main.temp} Celsius</div>
      <div><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/></div>
      <div><b>Wind: </b>{weather.wind.speed}kmh at {weather.wind.deg} degrees</div>
    </div>
  )
}

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  const handleSearch = (event) => setFilter(event.target.value)

  // gets country data from REST Countries API
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <Search 
        filter={filter} 
        setFilter={setFilter} 
        handleSearch={handleSearch} 
      />
      <Results 
        countries={countries} 
        filter={filter} 
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
