
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default function UsersService(){
	return (WrappedComponent)=>{
		 class _UsersService extends Component {

			constructor(props){
				super(props);
			}

			 submitUser(options, callback) {
				//Meteor.loginWithPassword(options.email, options.pass, callback)
                 alert('Login mock service !')
                 callback()
			 }
			 
			 logout(callback){
				//Meteor.logout(callback);
                 alert('Logout mock service !')
                 callback()
			 }

			render (){
				return (
					<WrappedComponent
						user = {this.props.user}
						submitUser = {this.submitUser}
						logout = {(callback)=>this.logout(callback)}
					/>
				)
			}

		}

		return  _UsersService
	}
}


