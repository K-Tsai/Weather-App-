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

  getWeather = async (e) => {
    const {city, country} = this.state;
    e.preventDefault();
    await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${Api_Key}`)
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
    
        this.setState({
          city: result.name,
          //country: result.sys.country,
          //temperature: result.main.temp,
          //humidity: result.main.humidity,
          //description: result.weather.description,
        });
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
}

  render() {
    const {city, country, temperature, humidity, description} = this.state
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
        loadWeather = {this.getWeather}
        city = {this.state.city}
        country = {this.state.country} />

      </div>
    )
  }
}

export default App;
