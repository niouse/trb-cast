
import React, { Component } from 'react';
import {factoriesSchema} from "./../factories.schema.js";
import {factoriesMongo} from "./../factories.js";

export const FactoriesCrudService = (WrappedComponent)=>{
	
	var factoriesCrudContext = factoriesSchema.namedContext("factoriesCrudOp")

	return class _FactoriesCrudService extends Component {

		constructor(props){
			super(props);
		}

		createFactorie(options , callback){
			factoriesSchema.clean(options);
			if(factoriesCrudContext.validate(options)){
				factoriesMongo.insert(options, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+factoriesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		readFactorie(options , callback){

		}
		
		updateFactorie(id, options , callback){
			console.log(options)
			factoriesSchema.clean(options);
			if(factoriesCrudContext.validate(options)){
				factoriesMongo.update({_id : id}, {$set : options}, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+factoriesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		deleteFactorie(id , callback){
			factoriesMongo.remove({_id : id}, callback);
		}
		
		render (){
			return (
				<WrappedComponent
					{...this.props}
					createFactorie = {this.createFactorie}
					readFactorie = {this.readFactorie}
					updateFactorie = {this.updateFactorie}
					deleteFactorie = {this.deleteFactorie}
				/>
			)
		}
	}
}
