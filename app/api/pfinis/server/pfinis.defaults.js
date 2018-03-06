/*var pfinis=require('./default/pfinis.json')
var batches = require('./default/batches.json')
var perfDelta= require('./default/perf-delta.json')*/

var pfinis= require('./default/agreg.json')


/*
batches.map((item, index)=>{
    item["perfDelta"]=perfDelta.filter((perf, index)=>{
        return perf.batchNumber === item.batchNumber
    })[0]
})

pfinis.map((item, index)=>{
    item["batches"]=batches.filter((batch, index)=>{
        return batch.pfinis === item.pfinis
    })
})
*/


module.exports=pfinis
