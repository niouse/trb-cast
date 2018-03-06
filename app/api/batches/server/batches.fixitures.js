
import {batchesMongo} from "./../batches.js";
import batchesDefaults from "./batches.defaults.js";


loadBatches = function(){
    //batchesMongo.remove({})
	 if (batchesMongo.find({}).fetch().length === 0) {
		 batchesDefaults.forEach((item, index)=>{
	     	batchesMongo.insert(batchesDefaults[index]); 
		 })
   }
   // console.log(batchesMongo.find({}).fetch())
}
    