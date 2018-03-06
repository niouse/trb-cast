
import {perfDeltaMongo} from "./../perf-delta.js";


Meteor.publish("perfDelta", function() {
	return  perfDeltaMongo.find({});
});

Meteor.publish("perfDeltaList", function() {
	return  perfDeltaMongo.find({}, {fields : {
		name : 1,
		status : 1,
		dateShow : 1,
		country : 1
	}});
});

Meteor.publish("onePerfDelta", function(perfDeltaId) { 
	return  perfDeltaMongo.find({_id : perfDeltaId});
});
    