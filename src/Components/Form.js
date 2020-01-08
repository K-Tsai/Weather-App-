import React from 'react';
import "./Form.css"
class Form extends React.Component {
	render() {
		return(
			<form onSubmit = {this.props.loadWeather}>
				<label>
					City:
					<input type="text" name= "city" className="city"/>
				</label>
				<label>
					Country:
					<input type ="text" name="country" className="country"/>
				</label>
				<input type ="submit" value="Submit" />
			</form>
		)
	}
}

export default Form;