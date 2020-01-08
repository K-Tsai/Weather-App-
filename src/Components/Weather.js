import React from 'react';

class Weather extends React.Component {
  render() {
		return(
			<div className= "results">
				<p>city: {this.props.city}</p>
			</div>
		);
  }
}

export default Weather;