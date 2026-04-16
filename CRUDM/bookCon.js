import buildId from "./buildId.js"
import dados from "./dados.js"
const { pacientes, medicos, consultas } = dados
export default function bookCon(date,desc,med,pac){
    let id = buildId(consultas)
    let indiceP = pacientes.findIndex(pacientes => pacientes.id===pac)
    if(indiceP== -1){
        console.log("xxxxxxxxxxxxxxxxxxxxxxpacient not foundxxxxxxxxxxxxxxxxxxxxxxxxxxx")
        return
    }
    let indiceM = medicos.findIndex(medicos => medicos.id===med)
    if(indiceM== -1){
        console.log("xxxxxxxxxxxxxxxxxxxxxxdoctor not foundxxxxxxxxxxxxxxxxxxxxxxxxxxx")
        return
    }
    let consulta={ id: id, 
        data:date, 
        idMedico: med, 
        idPaciente: pac, 
        descricao:desc }
    consultas.push(consulta)
} 