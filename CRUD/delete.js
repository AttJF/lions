import mok from "./mok.js"

export default function delet(id){
    const indice = mok.findIndex(mok=>mok.id===id)

    if(indice!==-1){
        mok.splice(indice,1)
    }
}