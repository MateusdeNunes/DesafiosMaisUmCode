//Crie uma função que retorne TRUE caso o primeiro parametro(String) termine com o segundo parametro(String). Senão, retorna FALSE

//const terminaIgual = (palavra, fimDaPalavra)=>{
    //return palavra.indexOf(palavra,palavra.length-fimDaPalavra.length) != -1;
//}
//console.log(terminaIgual('cafe','fe'))


//Caracteres em uma string são indexados da esquerda para a direita.
//O índice do primeiro caractere é 0, e o índice do último caractere de uma string chamada stringName é stringName.length - 1.
const terminaIgual = (palavra, fimDaPalavra)=>{
   if (palavra.indexOf(palavra.lenght)=fimDaPalavra.indexOf(palavra.lenght-fimDaPalavra)){
   return true;
   }else{
    return false;
   }
}
console.log(terminaIgual("cafe", 'fe')); //true
console.log(terminaIgual("banana", 'fe'));