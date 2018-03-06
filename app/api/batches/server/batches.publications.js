
import {batchesMongo} from "./../batches.js";


Meteor.publish("batches", function() {
	return  batchesMongo.find({});
});

Meteor.publish("batchesList", function() {
	/*return  batchesMongo.find({}, {fields : {
		name : 1,
		status : 1,
		dateShow : 1,
		country : 1
	}});*/
    return  batchesMongo.find({});
});

Meteor.publish("oneBatches", function(batchesId) { 
	return  batchesMongo.find({_id : batchesId});
});
    