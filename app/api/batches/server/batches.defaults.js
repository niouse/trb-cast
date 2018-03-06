var pfinisList=require('./default/pfinis.json')
var batches = require('./default/batches.json')
var perfDelta= require('./default/perf-delta.json')

var fs=require('fs')

batches.map((item, index)=>{
    let pfinis=pfinisList.filter((pfini, index)=>{
        return pfini.pfinis===item.pfinis
    })[0]
    
    for (let key in pfinis){
        if(!item[key]){
            item[key]=pfinis[key]
        }
    }
    
    return item
})


//fs.writeFileSync("/import/api/batches/server/default/agreg.json", JSON.stringify(batches))
//console.log(batches)

module.exports = batches


