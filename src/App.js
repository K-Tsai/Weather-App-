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
      city: [],
      country: [],
      temperature: [],
      humidity: [],
      description: []
    }
  }
  
  getWeather = (e) => {
    const {city, country} = e.event.target;
    e.preventDefault();
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${Api_Key}`)
    .then(res => res.json())
    .then(
      (result) => { 
        console.log(result)
        //this.setState({
          //city: result.name,
          //temperature: result.main.temp,
          //humidity: result.main.humidity,
          //description: result.weather.description,
        //});
      })
      .catch(error => console.error(error))
      //(error) => {
       // this.setState({
          //error
       // });
     // }
    
}

  render() {
    return (
      <div>
        <Titles/>
        <Form loadWeather = {this.getWeather}/>
        <Weather 
        loadWeather = {this.getWeather} 
        city = {this.state.city}
        country = {this.state.country}
        temperature = {this.state.temperature} 
        />
      </div>
    )
  }
}

export default App;
