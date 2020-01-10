import React from 'react';
import "./Form.css"
class Form extends React.Component {
	render() {
		return(
			<form onSubmit = {this.props.loadWeather}>
				<fieldset>
					<legend>Input Information</legend>
					<label>
						City:
						<input 
						type="text" 
						name= "city" 
						value={this.props.city}
						className="city"
						/>
					</label>
					<label>
						Country:
						<input 
						type ="text" 
						name ="country"  
						value={this.props.country} 
						className="country"
						/>
					</label>
					<input 
					type ="submit" 
					value="Submit" 
					/>
				</fieldset>
			</form>
		)
	}
}

export default Form;