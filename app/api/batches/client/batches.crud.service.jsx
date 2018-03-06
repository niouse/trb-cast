
import React, { Component } from 'react';
import batchesSchema from "./../batches.schemas.js";
import {batchesMongo} from "./../batches.js";

export const BatchesCrudService = (WrappedComponent)=>{
	
	var batchesCrudContext = batchesSchema.namedContext("batchesCrudOp")

	return class _BatchesCrudService extends Component {

		constructor(props){
			super(props);
		}

		createBatche(options , callback){
			batchesSchema.clean(options);
			if(batchesCrudContext.validate(options)){
				batchesMongo.insert(options, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+batchesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		readBatche(options , callback){

		}
		
		updateBatche(id, options , callback){
			console.log(options)
			batchesSchema.clean(options);
			if(batchesCrudContext.validate(options)){
				batchesMongo.update({_id : id}, {$set : options}, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+batchesCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		deleteBatche(id , callback){
			batchesMongo.remove({_id : id}, callback);
		}
		
		render (){
			return (
				<WrappedComponent
					{...this.props}
					createBatche = {this.createBatche}
					readBatche = {this.readBatche}
					updateBatche = {this.updateBatche}
					deleteBatche = {this.deleteBatche}
				/>
			)
		}
	}
}
