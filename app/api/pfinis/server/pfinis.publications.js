
import {pfinisMongo} from "./../pfinis.js";


Meteor.publish("pfinis", function() {
	return  pfinisMongo.find({});
});

Meteor.publish("pfinisList", function() {
	return  pfinisMongo.find({}, {fields : {
		name : 1,
	}});
});

Meteor.publish("onepfinis", function(pfinisId) { 
	return  pfinisMongo.find({_id : pfinisId});
});
    