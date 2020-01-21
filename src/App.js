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
      city: "",
      country: "",
      temperature: "",
      humidity: "",
      description: "",
      icon:"",
    }
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${Api_Key}&units=imperial`)
    .then(res => res.json())
    .then(
      (result) => { 
        this.setState({
          isLoaded: true,
          city: result.name + ", ",
          country: result.sys.country,
          temperature: result.main.temp + "°F" ,
          humidity: result.main.humidity + "%",
          description: result.weather[0].description,
          icon: result.weather[0].icon
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
      <div className= "container rounded">
        <header>
          <Titles/>
        </header>
        <main>
            <Form 
            loadWeather = {this.getWeather}
            />
            <Weather 
            city = {this.state.city}
            country = {this.state.country}
            temperature = {this.state.temperature} 
            humidity = {this.state.humidity}
            description = {this.state. description}
            icon = {this.state.icon}
            />
        </main>
      </div>
    )
  }
}

export default App;
