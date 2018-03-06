
import {typesMongo} from "./../types.js";


Meteor.publish("types", function() {
	return  typesMongo.find({});
});

Meteor.publish("typesList", function() {
	return  typesMongo.find({}, {fields : {
		name : 1,
		status : 1,
		dateShow : 1,
		country : 1
	}});
});

Meteor.publish("onetypes", function(typesId) { 
	return  typesMongo.find({_id : typesId});
});
    