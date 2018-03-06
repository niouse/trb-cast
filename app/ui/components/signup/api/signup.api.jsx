
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function Signup_Api(_msgDuration) {
	
	let msgDuration;
	let msgDurationDefault = 4000; 
	if(_msgDuration){
		try {
			msgDuration = Number(_msgDuration)
			msgDuration = (0 < msgDuration) && (msgDuration < 10000) ? msgDuration : msgDurationDefault
		}
		catch(e) {
			console.log("Signup component : error when converting user provided message duration. It will be set to default value (4000ms)")
			msgDuration = msgDurationDefault
		}	
	}
	
	else {msgDuration = msgDurationDefault}
	
    return (WrappedComponent) => {
        class $Signup_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					message : "",
					successMessage: "SUCCESS",
					successColor : props.successColor || "green",
					failureColor : props.failureColor || "red",
					username : "",
					firstName : "",
					lastName : "",
					email : "",
					password : "",
				}
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            handleChange(event, key){
				var newValue = event.currentTarget.value;
				this.setState({[key]: newValue});
			}

			createUser(e) {
				e.preventDefault();
				var options = {
					email : this.state.email,
					password : this.state.password,
					firstName : this.state.firstName,
					lastName : this.state.lastName,
					username : this.state.username,
				 };
				this.props.createUser(options, (err, res)=>this.showMessage(err, res));
			}


			showMessage(err, res){
				if(err){
					 this.setState({
						 message : err.reason,
						 messageColor : this.state.failureColor,
					 });
				}
				 else {
					 this.setState({
						 message : this.state.successMessage,
						 messageColor : this.state.successColor,
					 });
				 };
				 setTimeout(()=>{ 
					 this.setState({
						 message : " ",
					 });
				 }, msgDuration);
			}

            render() {
                return <WrappedComponent
				{...this.props}
				message = {this.state.message}
				messageColor = {this.state.messageColor}
				createUser = {(e)=>this.createUser(e)}
				username = {this.state.username}
				firstName = {this.state.firstName}
				lastName = {this.state.lastName}
				email = {this.state.email}
				password = {this.state.password}
				handleChange = {(event, key)=>this.handleChange(event, key)}
				/>
            }
        }
        $Signup_Api.propTypes = {
            styles: PropTypes.object.isRequired,
			//createUser : PropTypes.func.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $Signup_Api
    }
}
    