import promptSync from "prompt-sync"
const prompt = promptSync()
import ad from "./ad.js"
import mok from "./mok.js"
import delet from "./delete.js"
import att from "./att.js"
import listar from "./listar.js"
let op = 2
let op2
let control ={
    name: "",
    email: "",
    telefone: [],
}
let control2
while(op!=99){
    console.log("informe qual operação gostaria de fazer \n1-cadastro\n2-att\n3-listar\n4-deletar")
    op = parseInt(prompt())
    op2=1
    switch(op){
    case 1:
        control.name=prompt("digite name")
        control.email=prompt("digite email")
            while(op2!="99"){
                op2 = prompt("digite o telefone, digite 99 para sair")
                control.telefone.push(op2)
            }
        ad(control.name,control.email,control.telefone)
        control.telefone=[]
        break
    case 2:
        control2 = parseInt(prompt("digite o id"))
        control.name=prompt("digite name")
        control.email=prompt("digite email")
            while(op2!="99"){
                if(op=="99"){
                break
                }else{
                op2 = prompt("digite o telefone, digite 99 para sair")
                control.telefone.push(op2)
            }
        att(control2,control)
        break}
    case 3:
        listar()
        break
    case 4:
        control2 = parseInt(prompt("digite o id"))
        delet(control2)
        break
    default:
        break
        }
}


