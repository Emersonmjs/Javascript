var valor = document.querySelector('#valores')
var selecao = document.querySelector('select')
var res = document.querySelector('#res')
let valores = []

function isNumber(n){
    if (n >= 1 && n <= 100){
        return true
    } else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumber(valor.value) && !inList(valor.value, valores)){
        valores.push(Number(valor.value))
        var item = document.createElement('option')
        item.text = `Adicionou ${valor.value}`
        selecao.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor incorreto ou já encontrado na lista')
    }
    valor.value = ''
    valor.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores para continuar')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            } else if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
        
    }
}