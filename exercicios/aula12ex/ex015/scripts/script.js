function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                //img.setAttribute('src', 'imagens/bebe-homem.jpg')
                img.src = 'imagens/bebe-homem.jpg' 
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-homem.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebe-mulher.jpg')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulta-mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosa-mulher.jpg')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
