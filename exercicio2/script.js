// se quiser utilizar a mesma variavel (e somente modificar) é só usar o LET
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
const novaString1 = minhaString.trim()

 // a) Remova o excesso de espaços no final da string;
 minhaString.trim()

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log("Com espaços:", minhaString.length)
console.log("Sem espaços:", novaString1.length)

// c) Substitua os traços `________` por “sticioso”.
const novaString2 = novaString1.replaceAll("________", "sticioso") 
console.log(novaString2)
