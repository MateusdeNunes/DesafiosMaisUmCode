//Crie uma função que retorne TRUE caso o primeiro parametro(String) termine com o segundo parametro(String). Senão, retorna FALSE

//const terminaIgual = (palavra, fimDaPalavra)=>{
    //return palavra.indexOf(palavra,palavra.length-fimDaPalavra.length) != -1;
//}
//console.log(terminaIgual('cafe','fe'))


//Caracteres em uma string são indexados da esquerda para a direita.
//O índice do primeiro caractere é 0, e o índice do último caractere de uma string chamada stringName é stringName.length - 1.
function stringEndsWith(str, ending) {
    return str.endsWith(ending);
  }
  const string = 'cafe';
const ending = 'fe';
console.log(stringEndsWith(string, ending)); // Output: true