import dados from "./dados.js"
const { pacientes, medicos, consultas } = dados
import promptSync from "prompt-sync"
const prompt = promptSync()
export default function att(id){
    const indice = consultas.findIndex(consultas => consultas.id===id)
    console.log(indice)
    let resp1
    let resp2
    consultas.forEach(element => {
        if(element.id==id){
            resp1 = prompt("nova descrição")
            resp2 = prompt("nova data")
        }
    }); 
    consultas[indice].descricao=resp1 || consultas[indice].descricao
    consultas[indice].data=resp2 || consultas[indice].data

       
}