import React from 'react';
import './App.css';
import Form from './Components/Forms/Form.js';
import  Titles from'./Components/Titles/Titles.js';
import Weather from './Components/Weather/Weather.js';

const Api_Key = '39ff9f318bd59dd1bb978e51622ce4c5';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
      cod: undefined,
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      icon: undefined,
    }
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${Api_Key}&units=imperial`)
    const result = await api_call.json();
    const cod = result.cod;
    console.log(cod)
      if(cod === 200 && city && country){
        this.setState({
          city: result.name + ", ",
          country: result.sys.country,
          temperature: result.main.temp + "°F" ,
          humidity: result.main.humidity + "% Humidity",
          description: result.weather[0].description,
          icon: result.weather[0].icon,
          error:""
        })
      } else {
        this.setState({
          city: undefined,
          country: undefined,
          temperature: undefined,
          humidity: undefined,
          description: undefined,
          icon: undefined,
          error: "Please Enter Correct Values"
        });
      }
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
              error= {this.state.error}
              />
        </main>
      </div>
    )
  }
}

export default App;
