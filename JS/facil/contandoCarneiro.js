//uma variavel x inteira positiva (maior que zero), 3 por exemplo, imprime na tela a seguinte fala: 1 carneirinho...2 carneirinho...3 carneirinho...

const solucao = x =>{
    for (let i=1; i<= x; i++){
    console.log(`${i} carneirinho...`);
        
    }
}

console.log(solucao(3));