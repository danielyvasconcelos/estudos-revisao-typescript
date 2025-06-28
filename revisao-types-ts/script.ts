const frase: string = 'Front End'; // Tipo explícito 'string'
const total: number = 99.90;     // Tipo explícito 'number'

// TypeScript pode inferir o tipo [string, string, string, number] aqui,
// ou você pode ser mais específico se quiser, por exemplo: (string | number)[]
const empresas: (string | number)[] = ['Apple', 'Samsung', 'LG', 1 + 9];
const operacao: number = 100 + 200; // Tipo explícito 'number'

console.log(frase.toLowerCase());
console.log(total.toFixed());
console.log(total.toLocaleString());
console.log(frase.toLocaleString());
console.log(empresas.toLocaleString());
console.log(operacao);

// ---

// 1. Defina a interface para o seu objeto Produto.
// Esta é a forma correta de criar um "molde" de tipo em TypeScript.
interface Produto {
  nome: string;
  tipo: string;
}

// 2. Tipar o array 'produtos' explicitamente como um array de 'Produto'.
const produtos: Produto[] = [
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
function filtrarLivros(dados: Produto[]): Produto[] {
  return dados.filter((item: Produto) => item.tipo === 'livro');
}

console.log(filtrarLivros(produtos));