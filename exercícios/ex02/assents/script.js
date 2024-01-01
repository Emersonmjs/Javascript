function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('fsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', '../imagens/original/crianca-homem.jpg')
            } else if(idade < 18){
                //Adolescente
                img.setAttribute('src', '../imagens/original/adolescente-homem.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', '../imagens/original/jovem-homem.jpg')
            } else if(idade < 60){
                //Adulto
                img.setAttribute('src', '../imagens/original/adulto-homem.jpg')
            } else{
                //Idoso
                img.setAttribute('src', '../imagens/original/idoso-homem.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', '../imagens/original/crianca-mulher.jpg')
            } else if(idade < 18){
                //Adolescente
                img.setAttribute('src', '../imagens/original/adolescente-mulher.jpg')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', '../imagens/original/jovem-mulher.jpg')
            } else if(idade < 60){
                //Adulto
                img.setAttribute('src', '../imagens/original/adulta-mulher.jpg')
            } else{
                //Idoso
                img.setAttribute('src', '../imagens/original/idosa-mulher.jpg')
        }
    }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        img.style.borderRadius = '50%'
        img.style.width = '200px'
        img.style.height = '200px'
        img.style.paddingTop = '10px'
        img.style.display = 'block'
        img.style.margin = 'auto'
        res.appendChild(img)
    }
}