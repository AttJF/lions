import {media, mediana} from './calculos.js'
import PromptSync from "prompt-sync"
import oi from './oi.js'
const prompt = PromptSync()
let ar=[]
let var1
let var2
let control = 4
while(control!=0){
    oi()
    console.log("digite o que gostaria de fazer\n1-adicionar numero na lista\n2-remover ultimo numero da lista\n3-calcular media\n4-calcular mediana\n5-listar\n0-sair\n")
    control=parseFloat(prompt(""))
    switch (control){
    case 1:
        var1=parseFloat(prompt("valor"))
        ar.push(var1)
        console.log(ar)
        break
    case 2:
        ar.pop()
        console.log(ar)
        break

    case 3:
        console.log(media(ar))
        break;
    case 4:
        console.log(mediana(ar))
        break;
    case 5:
        console.log(ar)
        break;
    case 0:
        console.log("saindo")
        break
    default :
        console.log("não identificado")
        break
    
}
}