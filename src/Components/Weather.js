import React from 'react';

class Weather extends React.Component {
  render() {
<<<<<<< HEAD
		return(
			<div className= "results">
				<p>city: {this.props.city}</p>
			</div>
		);
=======
      return (
        <li> city: {this.props.city}</li>
      )
>>>>>>> 7b5b11d5cd7c75601dcc0301150b406d9569a6f6
  }
}

export default Weather;