function contar() {
    let inicio = window.document.getElementById("istart")
    let passo = window.document.getElementById("ipass")
    let fim = window.document.getElementById("iend")
    let res = window.document.getElementById("res")

    if (inicio.value.length == 0  || passo.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = `Impossível contar!`
        //[ERRO] Faltam dados!
    } else {
        res.innerHTML = "Contando: <br>"
        //TRANSFORMAR VALORES DAS VARIAVEIS EM NUMEROS
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {
            //CONTAGEM CRESCENTE
            for(let contador = i; contador <= f; contador += p) {
            res.innerHTML += ` 
            ${contador} \u{1F449}`
            }  res.innerHTML += `\u{1F3C1}`
        } else {
            //CONTAGEM REGRESSIVA
            for(let contador = i; contador >= f; contador -= p) {res.innerHTML += `${contador} \u{1F449}`}
            res.innerHTML += `\u{1F3C1}`
        }
    }
}