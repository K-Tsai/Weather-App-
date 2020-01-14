import React from 'react';

class Weather extends React.Component {
  render() {
    return (
			<div className= "results">
      	<p className= "col"> {this.props.city}</p>
				<p className= "col"> {this.props.country}</p>
				<p> {this.props.temperature}</p>
				<p> {this.props.humidity}</p>
				<p> {this.props.description}</p>
			</div>
    )
  }
}

export default Weather;