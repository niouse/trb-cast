
import {pfinisMongo} from "./../pfinis.js";

Meteor.methods({
	getpfinisKeys : function(){
		var pfinisKeys = [];
		for (var key in pfinisMongo.findOne({})){
			pfinisKeys.push(key)
		};
		return pfinisKeys;
	}
})
    