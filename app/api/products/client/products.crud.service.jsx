
import React, { Component } from 'react';
import {productsSchema} from "./../products.schema.js";
import {productsMongo} from "./../products.js";

export const ProductsCrudService = (WrappedComponent)=>{
	
	var productsCrudContext = productsSchema.namedContext("productsCrudOp")

	return class _ProductsCrudService extends Component {

		constructor(props){
			super(props);
		}

		createProduct(options , callback){
			productsSchema.clean(options);
			if(productsCrudContext.validate(options)){
				productsMongo.insert(options, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+productsCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		readProduct(options , callback){

		}
		
		updateProduct(id, options , callback){
			console.log(options)
			productsSchema.clean(options);
			if(productsCrudContext.validate(options)){
				productsMongo.update({_id : id}, {$set : options}, callback);
			}
			else {
				let err = {}
				let res = false
				err.reason = "Problematic keys :"+productsCrudContext._invalidKeys.map((x)=>{return x.name}).toString()
				callback(err, res)
			}
		}
		
		deleteProduct(id , callback){
			productsMongo.remove({_id : id}, callback);
		}
		
		render (){
			return (
				<WrappedComponent
					{...this.props}
					createProduct = {this.createProduct}
					readProduct = {this.readProduct}
					updateProduct = {this.updateProduct}
					deleteProduct = {this.deleteProduct}
				/>
			)
		}
	}
}
