let nome = new String("Brunoooo Pinho Campossssss 1978")
let email = "bruno@bruno.com.br"
let numeros = "1, 10, 100, 1000"

console.log(nome.search(/pinho/i))

console.log(nome.match(/O/ig))

console.log(nome.replace(/o/ig,"Teste"))
console.log(nome.match(/[a-m]/ig))
console.log(nome.match(/[a-m|0-9]/ig))
console.log(nome.match(/[a-g|h-z|0-9]/ig)) //Os colchetes é usado para colocar padrões. De a até n. O - é o limitador. A | significa e também para colocar outro padrão. 


//METACARACTERES
console.log(nome.match(/\d/ig)) // O \d é o meta caractere que vai encontrar dígitos.

console.log(nome.match(/\s/ig)) // O \s é o meta caractere que vai encontrar espaços.

console.log(nome.match(/\bP/ig)) // O \b é o meta caractere que vai encontrar caracteres alfanuméricos. Você precisa colocar ele e o dígito que deseja encontrar.


//QUANTIFICADORES
console.log(nome.match(/o+|s+/ig)) //Esse aqui tem como objetivo selecionar o mesmo caractere que esteja fazendo parte da mesma palavra e esteja repetindo. O o+ vai selecionar todos os Os do Bruno. No s+ vai selecionar todos os S como um só no Campos.

console.log(numeros)
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig)) //Esse vai considerar a procura das ocorrências e caso tenha ocorrência do primeiro dígito mais ele vai selecionar também. Mas também vai pegar as outras ocorrências do 0
console.log(numeros.match(/10?/ig)) //Esse vai considerar a procura das ocorrências e caso tenha ocorrência do primeiro dígito mais ele vai selecionar também. Mas não vai pegar as outras ocorrências do 0