
import {productsMongo} from "./../products.js";
import productsDefaults from "./products.defaults.js";


loadProducts = function(){
     productsMongo.remove({})
	 if (productsMongo.find({}).fetch().length === 0) {
		 productsDefaults.forEach((item, index)=>{
	     	productsMongo.insert(productsDefaults[index]); 
		 })
   }
    //console.log(productsMongo.find({}).fetch())
}
    