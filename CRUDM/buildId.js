export default function buildId(b){
    let bigger=1
b.forEach(element => {
    if(element.id>=bigger){
        bigger=element.id
    }
});
    return bigger+1
}