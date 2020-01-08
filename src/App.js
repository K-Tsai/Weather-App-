import React from 'react';
import './App.css';
import Form from './Components/Form.js';
import  Titles from'./Components/Titles.js';
//import Weather from './Components/Weather.js';

const Api_Key = '39ff9f318bd59dd1bb978e51622ce4c5';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      city: [],
      country: [],
      temperature: [],
      humidity: [],
      description: []
    }
    this.getWeather = this.getWeather.bind(this);
  }
  
  getWeather = async (e) => {
    const {city, country} = e.event.target;
    e.preventDefault();
    await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${Api_Key}`)
    .then(res => res.json())
    .then(
      (result) => { 
        this.setState({
          isLoaded: true,
          city: result.name,
          country: result.sys.country,
          //temperature: result.main.temp,
          //humidity: result.main.humidity,
          //description: result.weather.description,
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
      <div>
        <Titles/>
        <Form loadWeather = {this.getWeather}/>
        {/*<Weather 
        city = {this.state.city}
        country = {this.state.country} />*/}
        <p>{this.state.city}</p>
        <p>{this.state.country}</p>
      </div>
    )
  }
}

export default App;
