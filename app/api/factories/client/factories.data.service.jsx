

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {factoriesMongo} from "./../factories.js"

export const FactoriesDataService = (WrappedComponent)=>{
	
	 class _FactoriesComponentDataService0 extends Component {

		constructor(props){
			super(props);
		}
		 
		 
		 
		render (){
			return (
				this.props.factoriesList && this.props.factoriesList[0] ?
				<WrappedComponent
					{...this.props}
					factorie = {this.props.factorie}
					factoriesList = {this.props.factoriesList}
					getOneFactorie = {this.props.getOneFactorie}
				/> :
				<p>loading</p>
			)
		}
	}
	
	const _FactoriesDataService1 = createContainer((props) => {
		
	  let factorieSubOne = Meteor.subscribe("oneFactories", props.factorieId)  
	  let factorieSubList = Meteor.subscribe("factoriesList")
	  return {
		...props,
		factorie : factoriesMongo.find({_id : props.factorieId}).fetch()[0],
		factoriesList : factoriesMongo.find({}, {fields : {name : 1}}).fetch(),
	  };
	}, _FactoriesComponentDataService0);
	
	
	return class _FactoriesDataService2 extends Component {

		constructor(props){
			super(props);
			this.state = {
				factorieId : null
			}
		}
		
		getOneFactorie(id){
			this.setState({
				factorieId : id
			})
		}
	 
		render (){
			return (
				<_FactoriesDataService1
					{...this.props}
					factorieId = {this.state.factorieId}
					getOneFactorie={(id)=>this.getOneFactorie(id)}
				/> 
			)
		}
	}
	
}

