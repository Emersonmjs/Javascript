function carregar(){
    var corpo = document.querySelector('body')
    var imagem = document.querySelector('section > img')
    var sessao = document.querySelector('section')
    var hora = document.getElementById('hora')

    var agora = new Date()
    var horas = agora.getHours()
    hora.innerHTML = `Agora são ${horas} horas`
    sessao.style.color = 'black'
    if (horas >= 0 && horas < 12){
        corpo.style.background = '#EFD7BD'
        corpo.style.color = 'white'
        imagem.src = '/imagens/manhã.jpg'
    } else if (horas >= 12 && horas <= 18) {
        imagem.src = '/imagens/tarde.jpg'
        corpo.style.background = '#AA5821'
        corpo.style.color = 'white'
    } else if (horas > 18){
        imagem.src = '/imagens/noite.jpg'
        corpo.style.background = '#192640'
        corpo.style.color = 'white'
    }
}
