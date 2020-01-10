import React from 'react';

class Weather extends React.Component {
  render() {
    return (
			<section className= "results">
      		<h1> City: {this.props.city}</h1>
					<p> country: {this.props.country}</p>
					<p> temperature: {this.props.temperature}</p>
					<p> humidity: {this.props.humidity}</p>
					<p> description: {this.props.description}</p>
			</section>
    )
  }
}

export default Weather;