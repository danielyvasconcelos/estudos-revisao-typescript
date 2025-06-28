"use strict";
// revisao-types-ts/script.ts
// Não precisamos de "use strict" ou "//@ts-check" em arquivos .ts
// O TypeScript já lida com isso.
const frase = 'Front End'; // Tipo explícito 'string'
const total = 99.90; // Tipo explícito 'number'
// TypeScript pode inferir o tipo [string, string, string, number] aqui,
// ou você pode ser mais específico se quiser, por exemplo: (string | number)[]
const empresas = ['Apple', 'Samsung', 'LG', 1 + 9];
const operacao = 100 + 200; // Tipo explícito 'number'
console.log(frase.toLowerCase());
console.log(total.toFixed());
console.log(total.toLocaleString());
console.log(frase.toLocaleString());
console.log(empresas.toLocaleString());
console.log(operacao);
// 2. Tipar o array 'produtos' explicitamente como um array de 'Produto'.
const produtos = [
    {
        nome: 'senhor dos aneis',
        tipo: 'livro',
    },
    {
        nome: 'o conto da aia',
        tipo: 'livro',
    },
    {
        nome: 'o sennhor das moscas',
        tipo: 'livro',
    },
];
// ---
// 3. Tipar os parâmetros da função e o retorno diretamente no TypeScript.
// 'dados: Produto[]' significa que 'dados' é um array de objetos 'Produto'.
// 'item: Produto' dentro do filter indica que cada elemento é um 'Produto'.
// ': Produto[]' no final da assinatura da função indica que ela retorna um array de 'Produto'.
function filtrarLivros(dados) {
    return dados.filter((item) => item.tipo === 'livro');
}
console.log(filtrarLivros(produtos));
