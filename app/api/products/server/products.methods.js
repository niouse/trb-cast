
import {productsMongo} from "./../products.js";

Meteor.methods({
	getproductsKeys : function(){
		var productsKeys = [];
		for (var key in productsMongo.findOne({})){
			productsKeys.push(key)
		};
		return productsKeys;
	}
})
    