let nome = new String("Bruno Pinho Campos")
let nome2 = new String("Bruno Pinho Campos")
let outronome = "Exemplo"




let canal = new String("CFBCursos")
console.log(nome)



console.log(nome.charAt(0)) //Caractere específico de determinada posição especificada.


console.log(nome.charCodeAt(0)) //Retorna o código do caractere na posição especificada.

console.log(nome.concat(canal)) //Concatenando strings. Você pode colocar quantas quiser.
console.log(nome.concat(canal,nome,canal,nome))

console.log(nome.indexOf("o")) //Vai procurar o caractere(s) específico retornando a posição dele na string. Quando for -1 é por que não encontrou. Aqui ele vai pegar o primeiro que ele encontrar.

console.log(nome.lastIndexOf("o")) //Retorna a posição do último caractere que ele encontrar.

console.log(nome.localeCompare(nome2))

console.log(nome.replace("o","u")) //Vai alterar somente um caractere e vai ser o primeiro que encontrar. Você também pode substituir uma palavra por inteiro.

console.log(nome.search("Pinho")) //Utilizado para fazer pesquisa dentro da string. Pode ser quantas letras você quiser.

console.log(nome.slice(6,11)) //Você vai recortar a string pegando a posição inicial e final dela que você quer recortar.

let arr_nome = nome.split(" ")
console.log(arr_nome)