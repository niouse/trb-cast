

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {typesMongo} from "./../types.js"

export const TypesDataService = (WrappedComponent)=>{
	
	 class _TypesComponentDataService0 extends Component {

		constructor(props){
			super(props);
		}
		 
		 
		 
		render (){
			return (
				this.props.typesList && this.props.typesList[0] ?
				<WrappedComponent
					{...this.props}
					type = {this.props.type}
					typesList = {this.props.typesList}
					getOneType = {this.props.getOneType}
				/> :
				<p>loading</p>
			)
		}
	}
	
	const _TypesDataService1 = createContainer((props) => {
		
	  let typeSubOne = Meteor.subscribe("oneTypes", props.typeId)  
	  let typeSubList = Meteor.subscribe("typesList")
	  return {
		...props,
		type : typesMongo.find({_id : props.typeId}).fetch()[0],
		typesList : typesMongo.find({}, {fields : {name : 1}}).fetch(),
	  };
	}, _TypesComponentDataService0);
	
	
	return class _TypesDataService2 extends Component {

		constructor(props){
			super(props);
			this.state = {
				typeId : null
			}
		}
		
		getOneType(id){
			this.setState({
				typeId : id
			})
		}
	 
		render (){
			return (
				<_TypesDataService1
					{...this.props}
					typeId = {this.state.typeId}
					getOneType={(id)=>this.getOneType(id)}
				/> 
			)
		}
	}
	
}

