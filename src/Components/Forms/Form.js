import React from 'react';
import "./Form.css"

class Form extends React.Component {
	render() {
		return(
			<form onSubmit = {this.props.loadWeather}>
				<fieldset className= "d-flex flex-column">
					<legend>Input Information</legend>
					<label>
						City:
						<input 
						type="text" 
						name= "city" 
						value={this.props.city}
						className="form-control"
						/>
					</label>
					<label>
						Country:
						<input 
						type ="text" 
						name ="country"  
						value={this.props.country} 
						className="form-control"
						/>
					</label>
					<button 
					type ="submit" 
					className="btn btn-default btn-lg" 
					value="Submit">Get Weather
					</button>
				</fieldset>
			</form>
		)
	}
}

export default Form;