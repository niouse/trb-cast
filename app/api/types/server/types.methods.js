
import {typesMongo} from "./../types.js";

Meteor.methods({
	gettypesKeys : function(){
		var typesKeys = [];
		for (var key in typesMongo.findOne({})){
			typesKeys.push(key)
		};
		return typesKeys;
	}
})
    