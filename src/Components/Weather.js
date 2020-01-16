import React from 'react';
import "./Weather.css";

class Weather extends React.Component {
  render() {
    return (
			<div className= "results">
				<div className= "results1">
      		<p className= "col"><span>C:</span> {this.props.city}</p>
					<p className= "col"> <span>C:</span> {this.props.country}</p>
					<p> <span>T:</span> {this.props.temperature}</p>
					<p> <span>H:</span> {this.props.humidity}</p>
					<p> <span>D:</span>{this.props.description}</p>
					</div>
			</div>
    )
  }
}

export default Weather;