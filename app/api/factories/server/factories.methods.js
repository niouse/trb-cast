
import {factoriesMongo} from "./../factories.js";

Meteor.methods({
	getfactoriesKeys : function(){
		var factoriesKeys = [];
		for (var key in factoriesMongo.findOne({})){
			factoriesKeys.push(key)
		};
		return factoriesKeys;
	}
})
    