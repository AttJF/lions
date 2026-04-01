const prompt = require('prompt-sync')()

let password = "admin2024"
let control = true
let cTry = 5
let guess
while(control){
    guess = prompt("digite a senha")
while(cTry==-1){
    console.log("Cofre bloqueado, peça permissão direta a gerencia ")
}
if(guess==password){
    console.log('cofre aberto')
    control = false
}else{
    console.log('senha incorreta, tente novamente')
    cTry--
}
}