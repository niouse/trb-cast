
import {perfDeltaMongo} from "./../perf-delta.js";

Meteor.methods({
	getperfDeltaKeys : function(){
		var perfDeltaKeys = [];
		for (var key in perfDeltaMongo.findOne({})){
			perfDeltaKeys.push(key)
		};
		return perfDeltaKeys;
	}
})
    