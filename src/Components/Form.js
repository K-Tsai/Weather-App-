import React from 'react';
import "./Form.css"
class Form extends React.Component {
	render() {
		return(
				<form>
					<label>
						City:
						<input type="text" name="city" class="city"/>
					</label>
					<label>
						Country:
						<input type ="text" name="country" class="country"/>
					</label>
					<input type ="submit" value="Submit" />
				</form>
		)
	}
}

export default Form;