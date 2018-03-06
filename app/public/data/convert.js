var fs = require('fs')


var txt = fs.readFileSync('./perf-delta2.csv', 'latin1')

var table = txt.split('\n').slice(0,-1).map((item, index)=>{  
    return item.split(";").slice(0,-1)
})

var legends = table[0]
var data = table.slice(1)

let result = []

data.forEach((item, index)=>{
    var obj = {}
    for (let i=0; i<item.length; i++){
        let key=legends[i]
        obj[key]=item[i]
    }
    result.push(obj)
})

fs.writeFileSync('test.json', JSON.stringify(result))

console.log(result)

