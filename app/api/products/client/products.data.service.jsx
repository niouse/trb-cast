

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'react-meteor-data';

import { Subject } from 'rxjs/Subject';

import {productsMongo} from "./../products.js"

export const ProductsDataService = (WrappedComponent)=>{
	
	 class _ProductsComponentDataService0 extends Component {

		constructor(props){
			super(props);
		}
		 
		 
		 
		render (){
			return (
				this.props.productsList && this.props.productsList[0] ?
				<WrappedComponent
					{...this.props}
					product = {this.props.product}
					productsList = {this.props.productsList}
					getOneProduct = {this.props.getOneProduct}
				/> :
				<p>loading</p>
			)
		}
	}
	
	const _ProductsDataService1 = createContainer((props) => {
		
	  let productSubOne = Meteor.subscribe("oneProducts", props.productId)  
	  let productSubList = Meteor.subscribe("productsList")
	  return {
		...props,
		product : productsMongo.find({_id : props.productId}).fetch()[0],
		productsList : productsMongo.find({}, {fields : {name : 1}}).fetch(),
	  };
	}, _ProductsComponentDataService0);
	
	
	return class _ProductsDataService2 extends Component {

		constructor(props){
			super(props);
			this.state = {
				productId : null
			}
		}
		
		getOneProduct(id){
			this.setState({
				productId : id
			})
		}
	 
		render (){
			return (
				<_ProductsDataService1
					{...this.props}
					productId = {this.state.productId}
					getOneProduct={(id)=>this.getOneProduct(id)}
				/> 
			)
		}
	}
	
}

