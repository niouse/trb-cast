
import {batchesMongo} from "./../batches.js";

Meteor.methods({
	getbatchesKeys : function(){
		var batchesKeys = [];
		for (var key in batchesMongo.findOne({})){
			batchesKeys.push(key)
		};
		return batchesKeys;
	}
})
    