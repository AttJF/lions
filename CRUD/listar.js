import mok from "./mok.js"
export default function listar(){
if(mok.length==0){
    console.log(`no users found`)
    return
}
mok.forEach(element => {
    console.log(`id: ${element.id}`)
    console.log(`nome: ${element.name}`)
    console.log(`email: ${element.email}`)
    console.log(`telefone: ${element.telefone.join(" | ")}`)
    
})}