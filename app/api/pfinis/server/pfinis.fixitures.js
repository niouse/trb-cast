
import {pfinisMongo} from "./../pfinis.js";
import pfinisDefaults from "./pfinis.defaults.js";


loadPfinis = function(){
   pfinisMongo.remove({})
	 if (pfinisMongo.find({}).fetch().length === 0) {
		 pfinisDefaults.forEach((item, index)=>{
	     	pfinisMongo.insert(pfinisDefaults[index]); 
		 })
   }
   // console.log(pfinisMongo.find({name: 'PFINIS0018064'}).fetch()[0].batches[0].perfDelta)
    //console.log(JSON.stringify(pfinisMongo.find({}).fetch()))
}
    