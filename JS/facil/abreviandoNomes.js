//Escreva uma função para abreviar um nome composto. Ela deve retornar as iniciais de cada nome em letra maiscula, separada por ponto.

const solucao = name => {
    let dividindoONome = name.split(" ");
    let iniciaisMaiusculas= dividindoONome.map(n => n[0].toUpperCase()).join('.');
    return iniciaisMaiusculas;
}

console.log(solucao("Jorge Amado")); 
console.log(solucao("Mateus de Oliveira nunes"));
