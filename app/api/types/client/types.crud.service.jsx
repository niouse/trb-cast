
import React, { Component } from 'react';
import {typesSchema} from "./../types.schema.js";
import {typesMongo} from "./../types.js";

export const TypesCrudService = (WrappedComponent)=>{
	
	var typesCrudContext = typesSchema.namedContext("typesCrudOp")

	return class _TypesCrudService extends Component {

		constructor(props){
			super(props);
		}

		createType(options , callback){
			typesSchema.clean(options);
			if(typesCrudContext.validate(options)){
				typesMongo.insert(options, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+typesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		readType(options , callback){

		}
		
		updateType(id, options , callback){
			console.log(options)
			typesSchema.clean(options);
			if(typesCrudContext.validate(options)){
				typesMongo.update({_id : id}, {$set : options}, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+typesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		deleteType(id , callback){
			typesMongo.remove({_id : id}, callback);
		}
		
		render (){
			return (
				<WrappedComponent
					{...this.props}
					createType = {this.createType}
					readType = {this.readType}
					updateType = {this.updateType}
					deleteType = {this.deleteType}
				/>
			)
		}
	}
}
