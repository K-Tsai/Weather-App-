import React from 'react';
import "./Weather.css";

class Weather extends React.Component {
  render() {
    return (
			<div className= "results">
				<div className= "results1">
      		<p className= "col"> {this.props.city}</p>
					<p className= "col"> {this.props.country}</p>
					<p> {this.props.temperature}</p>
					<p> {this.props.humidity}</p>
					<p> {this.props.description}</p>
					</div>
			</div>
    )
  }
}

export default Weather;