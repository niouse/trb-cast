
import {typesMongo} from "./../types.js";
import typesDefaults from "./types.defaults.js";


loadTypes = function(){
	 if (typesMongo.find({}).fetch().length === 0) {
		 typesDefaults.forEach((item, index)=>{
	     	typesMongo.insert(typesDefaults[index]); 
		 })
   }
    //console.log(typesMongo.find({}).fetch())
}
    