import React from 'react';

class Weather extends React.Component {
  render() {
      return (
        <li> city: {this.props.city}</li>
      )
  }
}

export default Weather;