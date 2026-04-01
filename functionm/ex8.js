const prompt = require('prompt-sync')()

let server ={
    total : 1000,
    occupaid: 200 
}

function saveServer (server,gb){
    if((server.total-server.occupaid)-gb<0){
        return "Not enough data storage"
    }else{
        server.occupaid=server.occupaid+gb
        return "Data sucesfully stored"
    }
}

let gb = parseInt(prompt("arquivo que deseja guardar"))

let message = saveServer(server,gb)

console.log(message)
console.log(server)