function contar(){
    var txinicio = document.querySelector('#txtinicio')
    var txfim = document.querySelector('#txtfim')
    var txpasso = document.querySelector('#txtpasso')
    var res = document.querySelector('#res')
    var inicio = Number(txinicio.value)
    var fim = Number(txfim.value)
    var passo = Number(txpasso.value)
    if (txinicio.value.length == 0 || txfim.value.length == 0 || txpasso.value.length == 0){
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: '
        if (passo <= 0){
            alert('Passo inválido! Considerando o PASSO como 1')
            passo = 1
        }
        if (inicio < fim){
            while (inicio <= fim){
                res.innerHTML += (` ${inicio} \u{1F449}`)
                inicio += passo
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            for (c = inicio; inicio >= fim; inicio -= passo){
                res.innerHTML += ` ${inicio} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}