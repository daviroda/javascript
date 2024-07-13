function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')    
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos` //mostra a hora exata do sistema e os minutos.
if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'imagens/manha.jpg'
    window.document.body.style.background = '#D5D436'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'imagens/tarde.jpg'
    window.document.body.style.background = '#FA983D'
} else {
    //BOA NOITE!
    img.src = 'imagens/noite.jpg'
    window.document.body.style.background = '#1A4F79'
} //cores resposivas

}
