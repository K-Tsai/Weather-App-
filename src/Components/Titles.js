import React from 'react';
import "./Titles.css"
class Titles extends React.Component {
    render () {
		return (
			<div className = "text-center">
				<div className = "jumbotron">
				<h1> Weather App</h1>
				<h5> Helps you find weather conditions in cities</h5>
				</div>
			</div>
		)
	}
}

export default Titles;