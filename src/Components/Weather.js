import React from 'react';
import "./Weather.css";
import Img from 'react-image';
import ErrorBoundary from './ErrorBoundary';

class Weather extends React.Component {
  render() {
    return (
		<ErrorBoundary>
			<div className= "results">
				<div className="frontIcon">
					<Img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`}/>
				</div>
      	<p><span>C:</span> {this.props.city}{this.props.country} </p>
				<p> <span>T:</span> {this.props.temperature}</p>
				<p> <span>H:</span> {this.props.humidity}</p>
				<p> <span>D:</span>{this.props.description}</p>
			</div>
		</ErrorBoundary>
    )
  }
}

export default Weather;