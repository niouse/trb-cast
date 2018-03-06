import React, { Component } from 'react';

export default function  AppAccessService(){
	return (WrappedComponent) => {
		class $AppAccessService extends Component {

			constructor(props) {
				super(props)
			}


			componentDidMount(){
				if(!Meteor.user()){
					this.props.goToPageNext("/login")
				}
			}

			render (){
				return <WrappedComponent
					{...this.props}
					/>
			}	
		}
		return $AppAccessService
	}
}






