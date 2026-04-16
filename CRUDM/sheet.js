import dados from "./dados.js"
import search from "./search.js";
const { pacientes, medicos, consultas } = dados
export default function sheet(consultas){
    let nameM
    let nameP
    consultas.forEach(element => {
        console.log(element.id)
        console.log("data: "+element.data)
        console.log("descrição: "+element.descricao)
        nameM = search(medicos,element.idMedico)
        nameP = search(pacientes,element.idPaciente)
        console.log("medico: "+nameM)
        console.log("paciente: "+nameP)
    });
}
