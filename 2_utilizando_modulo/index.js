const fs = require('fs');

fs.readFile('2_utilizando_modulo/arquivo.txt','utf-8',(err,data)=>{

    if(err){
        console.log(err)
    }
        console.log(data)
    

});