const prompt = require("prompt-sync")()

let password=prompt('Digite a senha do cofre :')

while(password!=9876){
    console.log('Acesso negado:senha incorreta')
    password=prompt('Digite a senha novamente')
}

console.log('Senha inserida corretamente, cofre liberado')