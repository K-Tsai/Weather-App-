import React from 'react';
import './App.css';
import Form from './Components/Form.js';
import  Titles from'./Components/Titles.js';
//import Weather from './Components/Weather.js';

const Api_Key = 'e90c6bb8-bfbd-11e9-9cb5-2a2ae2dbcce4';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: [],
      country: [],
      temperature: [],
      humidity: [],
      description: []
    }
  }
  
  getWeather = (e) => {
    const {city, country} = this.state;
    e.preventDefault();
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${Api_Key}`)
    .then(res => res.json())
    .then(
      (result) => { 
        this.setState({
          city: result.name,
          country: result.sys.country,
          
        });
      }
}

  render() {
    return (
      <div>
        <Titles/>
        <Form loadWeather = {this.getWeather}/>
        <Weather 
        city = {this.state.city}
        country = {this.state.country} />
      </div>
    )
  }
}

export default App;
