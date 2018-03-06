

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {perf-deltsMongo} from "./../perf-delts.js"

export const Perf-deltsDataService = (WrappedComponent)=>{
	
	 class _Perf-deltsComponentDataService0 extends Component {

		constructor(props){
			super(props);
		}
		 
		 
		 
		render (){
			return (
				this.props.perf-deltsList && this.props.perf-deltsList[0] ?
				<WrappedComponent
					{...this.props}
					perf-delt = {this.props.perf-delt}
					perf-deltsList = {this.props.perf-deltsList}
					getOnePerf-delt = {this.props.getOnePerf-delt}
				/> :
				<p>loading</p>
			)
		}
	}
	
	const _Perf-deltsDataService1 = createContainer((props) => {
		
	  let perf-deltSubOne = Meteor.subscribe("onePerf-delts", props.perf-deltId)  
	  let perf-deltSubList = Meteor.subscribe("perf-deltsList")
	  return {
		...props,
		perf-delt : perf-deltsMongo.find({_id : props.perf-deltId}).fetch()[0],
		perf-deltsList : perf-deltsMongo.find({}, {fields : {name : 1}}).fetch(),
	  };
	}, _Perf-deltsComponentDataService0);
	
	
	return class _Perf-deltsDataService2 extends Component {

		constructor(props){
			super(props);
			this.state = {
				perf-deltId : null
			}
		}
		
		getOnePerf-delt(id){
			this.setState({
				perf-deltId : id
			})
		}
	 
		render (){
			return (
				<_Perf-deltsDataService1
					{...this.props}
					perf-deltId = {this.state.perf-deltId}
					getOnePerf-delt={(id)=>this.getOnePerf-delt(id)}
				/> 
			)
		}
	}
	
}

