let num = document.getElementById("inum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    } 
} //teste lógico (entre 1 e 100)
 
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}  //teste lógico (encontrado na lista ou não)

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
       //tudo OK
    } else {
        window.alert("Valor inválido ou já encontrado na lista.")
    }
}