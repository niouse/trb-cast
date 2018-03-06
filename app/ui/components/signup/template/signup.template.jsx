
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function Signup_Template(TextField, RaisedButton) {
    return (wrappedComponent) => {
        const $Signup_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
                <div id="signup-container" className="container" style={styles.container}>
					<h1 
					id="signup-title"
					style={styles.title}
				>
					{text.title}
				</h1>
				 <form 
					 id="signup-form" 
					 style={styles.form} 
					 onSubmit={props.createUser}
				 >
					 <TextField
						  id="signup-username"
						  style={styles.username}
						  value={props.username}
						  name="username"
						  hintText="Hint Text"
						  floatingLabelText={text.username}
						  required="true"
						  onChange={(event, key) => {props.handleChange(event, "username")}}
						/>
					 <TextField
						  id="signup-firstName"
						  style={styles.firstName}
						  value={props.firstName}
						  name="firstName"
						  required="true"
						  hintText="Hint Text"
						  floatingLabelText={text.firstName}
						  onChange={(event, key) => {props.handleChange(event, "firstName")}}
						/>
					 <TextField
						  id="signup-lastName"
						  style={styles.lastName}
						  value={props.lastName}
						  name="lastName"
						  required="true"
						  hintText="Hint Text"
						  floatingLabelText={text.lastName}
						  onChange={(event, key) => {props.handleChange(event, "lastName")}}
						/>

					<TextField
						  id="signup-email"
						  style={styles.email}
						  value={props.email}
						  name="email"
						  hintText="Hint Text"
						  type="email" pattern="[^ @]*@[^ @]*"
						  floatingLabelText={text.email}
						  required="true"
						  onChange={(event, key) => {props.handleChange(event, "email")}}
						/>

					 <TextField
						  id="signup-password"
						  style={styles.password}
						  value={props.password}
						  name="password"
						  type="password"
						  pattern=".{5,20}"
						  hintText="Hint Text"
						  floatingLabelText={text.password}
						  required="true"
						  onChange={(event) => {props.handleChange(event, "password")}}
						/>

					 {/*<DropDownMenu
						  id="signup-type"
						  value={props.type}
						  label="type de compte"
						  onChange={(event, index, newValue)=>{props.onTypeChange(event, index, newValue)}}
						  style={styles.textField}
						  autoWidth={false}
						>
						  <MenuItem value="visitor" primaryText="visiteur" />
						  <MenuItem value="user" primaryText="utilisateur" />
						  <MenuItem value="admin" primaryText="administrateur" />
						</DropDownMenu>*/}
					 
						<RaisedButton 
							id="signup-createUser"
							style={styles.createUser}
							type="submit" 
							label={text.createUser || "create user"} 
							primary={true} 
						/> 
				</form>
				
				<p 
					id="signup-message" 
					style={Object.assign({}, styles.message, {color : props.messageColor})}
				>
					{props.message}
				</p>
				</div>
            );
        }
        $Signup_Template.propTypes = {
            styles: PropTypes.object.isRequired,
            text: PropTypes.object.isRequired,
        };
        return $Signup_Template
    }
}
    