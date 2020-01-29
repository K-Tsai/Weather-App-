import React from 'react';
import "./Titles.css";

class Titles extends React.Component {
  render () {
		return (
			<div className = "text-center">
				<div className = "titles">
					<h1 className= "mainTitle"> Weather App</h1>
					<h5 className= "subTitle"> Helps you find weather conditions in cities</h5>
				</div>
			</div>
		)
	}
}

export default Titles;