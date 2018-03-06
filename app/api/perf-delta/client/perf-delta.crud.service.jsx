
import React, { Component } from 'react';
import {perf-deltaSchema} from "./../perf-delta.schema.js";
import {perf-deltaMongo} from "./../perf-delta.js";

export const Perf-deltsCrudService = (WrappedComponent)=>{
	
	var perf-deltaCrudContext = perf-deltaSchema.namedContext("perf-deltaCrudOp")

	return class _Perf-deltsCrudService extends Component {

		constructor(props){
			super(props);
		}

		createPerf-delt(options , callback){
			perf-deltaSchema.clean(options);
			if(perf-deltaCrudContext.validate(options)){
				perf-deltaMongo.insert(options, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+perf-deltaCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		readPerf-delt(options , callback){

		}
		
		updatePerf-delt(id, options , callback){
			console.log(options)
			perf-deltaSchema.clean(options);
			if(perf-deltaCrudContext.validate(options)){
				perf-deltaMongo.update({_id : id}, {$set : options}, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+perf-deltaCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		deletePerf-delt(id , callback){
			perf-deltaMongo.remove({_id : id}, callback);
		}
		
		render (){
			return (
				<WrappedComponent
					{...this.props}
					createPerf-delt = {this.createPerf-delt}
					readPerf-delt = {this.readPerf-delt}
					updatePerf-delt = {this.updatePerf-delt}
					deletePerf-delt = {this.deletePerf-delt}
				/>
			)
		}
	}
}
