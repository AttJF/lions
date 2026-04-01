const prompt = require('prompt-sync')()

const validar = (nome,cracha)=> {
if (nome.length>5&&cracha>1000){
    return true
}
else{
    return false
}
}

let name = prompt("nome")
let code = parseInt(prompt ("codigo do cracha"))

let response = validar(name,code)

if(response){
    console.log("acesso permitido")
}else{
    console.log("acesso negado")
}