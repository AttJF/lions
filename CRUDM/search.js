import dados from "./dados.js"
const { pacientes, medicos, consultas } = dados
export default function search(b,i){
let response ="usuario nao encontrado  no banco de dados, rever"
b.forEach(element => {
    if(element.id==i){
        response=element.nome
    }
})
return response;
}