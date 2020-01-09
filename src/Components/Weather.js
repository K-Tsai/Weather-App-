import React from 'react';

class Weather extends React.Component {
  render() {
    return (
			<ul>
      	<li> city: {this.props.city}</li>
				<li> country: {this.props.country}</li>
				<li> temperature: {this.props.temperature}</li>
			</ul>
    )
  }
}

export default Weather;