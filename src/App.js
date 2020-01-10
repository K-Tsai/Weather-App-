import React from 'react';
import './App.css';
import Form from './Components/Form.js';
import  Titles from'./Components/Titles.js';
import Weather from './Components/Weather.js';

const Api_Key = '39ff9f318bd59dd1bb978e51622ce4c5';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      description: undefined
    }
    this.getWeather = this.getWeather.bind(this);
  }
  
  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${Api_Key}`)
    .then(res => res.json())
    .then(
      (result) => { 
        this.setState({
          isLoaded: true,
          city: result.name,
          country: result.sys.country,
          temperature: result.main.temp,
          humidity: result.main.humidity,
          description: result.weather[0].description,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}


  render() {
    return (
      <div className= "container">
        <header>
          <Titles/>
        </header>
        <body>
            <Form 
            loadWeather = {this.getWeather}
            onClick= {this.onClick}
            />
            <Weather 
            city = {this.state.city}
            country = {this.state.country}
            temperature = {this.state.temperature} 
            humidity = {this.state.humidity}
            description = {this.state. description}
            />
        </body>
      </div>
    )
  }
}

export default App;
