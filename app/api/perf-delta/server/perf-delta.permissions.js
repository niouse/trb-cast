
import {perfDeltaMongo} from "./../perf-delta.js";

perfDeltaMongo.allow({
	insert : ()=>{
		return true
	},
	update : ()=>{
		return true
	},
	remove : ()=>{
		return true
	}
})
    