
import {productsMongo} from "./../products.js";


Meteor.publish("products", function() {
	return  productsMongo.find({});
});

Meteor.publish("productsList", function() {
	return  productsMongo.find({}, {fields : {
		name : 1,
		status : 1,
		dateShow : 1,
		country : 1
	}});
});

Meteor.publish("oneproducts", function(productsId) { 
	return  productsMongo.find({_id : productsId});
});
    