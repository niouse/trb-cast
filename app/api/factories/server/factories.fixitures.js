
import {factoriesMongo} from "./../factories.js";
import factoriesDefaults from "./factories.defaults.js";


loadFactories = function(){
	 if (factoriesMongo.find({}).fetch().length === 0) {
		 factoriesDefaults.forEach((item, index)=>{
	     	factoriesMongo.insert(factoriesDefaults[index]); 
		 })
   }
    
    //console.log(factoriesMongo.find({}).fetch())
}
    