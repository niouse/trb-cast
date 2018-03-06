
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

let message=`
No login route parameter has been provided to the Login component. 
Login cmpoenent take an object parameter with two properties:
    - loginRoute : String, Required, URL after correct Login
    - msgDuration : Number, Optional,  default to 400ms
}
Make sure that you built the Login component as so:

import Login from "./path-to-login/Login.compenent.jsx"

opt={
    loginRoute : "home"
    msgDuration : 400
}

@Login(opt)
class CustomName{}

`

export default function Login_Api(opt) {
	console.log(opt)
    // SET MESSAGE DURATION
	let msgDuration;
	let msgDurationDefault = 4000; 
	if(opt.msgDuration){
		try {
			msgDuration = Number(opt.msgDuration)
			msgDuration = (0 < msgDuration) && (msgDuration < 10000) ? msgDuration : msgDurationDefault
		}
		catch(e) {
			console.log("Login component : error when converting user provided message duration. It will be set to default value (4000ms)")
            console.log(e.message)
			msgDuration = msgDurationDefault
		}
		
	}
	else {
        msgDuration = msgDurationDefault
    }
	
    let loginRoute
    if(!opt.loginRoute){
        let err = new Error(message, "login.api.jsx", 51)
 
        throw err
    }
    else loginRoute = opt.loginRoute 
    console.log(loginRoute)
	
    return (WrappedComponent) => {
        class $Login_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {
					message : " ",
				}
                this.submitUser=this.submitUser.bind(this)
                this.goToSignup=this.goToSignup.bind(this)
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            submitUser(e) {			
				e.preventDefault();
                //Execute submitUserProps
				if(this.props.submitUser && typeof(this.props.submitUser) === 'function'){
					let options = {
						email : document.getElementById("login-mailInput").value,
						pass : document.getElementById("login-passwordInput").value,
					}
					this.props.submitUser(options, (error)=>{
						if(error){
							this.showMessage(error)
						}
						else{
							this.props.goToPageNext(`/${loginRoute}`)
							//browserHistory.push("/home");
						}
					});
				}
				else {
					let err = new Error( "No method for submitting user has been provided to Login component. You must pass a \"submitUser\" function to login component via props, or change source code of Login.api.jsx")
					throw err
				}
			}
			
			goToSignup(){
				this.props.goToPageNext('/signup')
			}

			showMessage(error){
				if(error){
					 this.setState({
						 message : error.reason,
					 });

					 setTimeout(()=>{ 
						 this.setState({
							 message : " ",
						 });
					 }, msgDuration);
				}
				 else {
					 browserHistory.push("/trb-perf");
				 };
			}

            render() {
                return <WrappedComponent
				{...this.props}
				message = {this.state.message}
				submitUser = {this.submitUser}
				goToSignup = {this.goToSignup}
				/>
            }
        }
        $Login_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $Login_Api
    }
}
    