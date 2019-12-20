import React from 'react';

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
						<input type ="text" name="country" class="city"/>
					</label>
					<input type ="submit" value="Submit" />
				</form>
		)
	}
}

export default Form;