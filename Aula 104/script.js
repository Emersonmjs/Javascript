let nome = new String("Bruno Pinho Campos")

console.log(nome.startsWith("B")) //Ele vai ver se a string começa com o valor dentro dos parenteses.

console.log(nome.endsWith("pos")) //Ele vai ver se a string termina com o valor dentro dos parenteses.

console.log(nome.includes("teste")) //Ver se em algum lugar na string tem o valor dentro dos parenteses.

console.log(nome.repeat(4)) //Quantidade de vezes que você quer que a string se repita.

console.log(String.fromCodePoint(66)) //Aqui você informa o código do caractere e ele vai te retornar o caractere que você tem esse código. No exemplo ele vai retornar B.

console.log(String.fromCodePoint(66, 114, 117, 110, 111))