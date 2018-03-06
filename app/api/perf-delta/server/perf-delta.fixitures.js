
import {perfDeltaMongo} from "./../perf-delta.js";
import perfDeltaDefaults from "./perf-delta.defaults.js";


loadPerfDelta = function(){
	 if (perfDeltaMongo.find({}).fetch().length === 0) {
		 perfDeltaDefaults.forEach((item, index)=>{
	     	perfDeltaMongo.insert(perfDeltaDefaults[index]); 
		 })
   }
    //console.log(perfDeltaMongo.find({}).fetch())
}
    