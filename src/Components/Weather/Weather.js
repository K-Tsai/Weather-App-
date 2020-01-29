import React from 'react';
import "./Weather.css";
import Img from 'react-image';

class Weather extends React.Component {
  render() {
    return (
			<div className= "results">
				<div className="frontIcon">
					<Img src={`https://openweathermap.org/img/wn/${this.props.icon}@2x.png`}/>
				</div>
				<h1 className= "temperature">{this.props.temperature}</h1>
      	<p className= "location">{this.props.city}{this.props.country} </p>
				<p className= "humidity">{this.props.humidity}</p>
				<p className= "description">{this.props.description}</p>
				<p className="error">{this.props.error}</p>
			</div>
    )
  }
}

export default Weather;