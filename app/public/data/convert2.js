var fs = require('fs')


var txt = fs.readFileSync('./betons.csv', 'latin1')

var table = txt.split('\n').slice(1,-1).map((item, index)=>{  
    return {
        name : item
    }
})



fs.writeFileSync('./test.json', JSON.stringify(table))

