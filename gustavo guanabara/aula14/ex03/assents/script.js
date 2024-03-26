function tabuada(){
    var txnumero = document.querySelector('#txtnumero')
    var tab = document.querySelector('#seltab')
    var numero = Number(txnumero.value)
    if (txnumero.value.length == 0){
        alert('Por favor digite um número!')
    } else{
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            item.value = `tab${c}`
            tab.appendChild(item)   
        }
    }
    
}