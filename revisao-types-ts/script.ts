//@ts-check
//aponta possiveis erros

// npm install -g typescript : instalação global do compilador do TS
const frase = 'Front End';
const total = 99.90;
const empresas = ['Apple', 'Samsung', 'LG',1+9]; // arrays : 
const operacao = 100 + 200;


//toLowerCase(); - metodo que deixa tudo minusculo
console.log(frase.toLowerCase()); // depuração

console.log(total.toFixed());// total.toFixed() - metodo quue arredonda o numero e retorna uma string
// não entendi muitoo bem o que esse 
//coverte numero em  string 
console.log(total.toLocaleString());

console.log(frase.toLocaleString());

//empresas.map((empresa)=> empresa.toLocaleLowerCase());

//retorna as strings e soma os numeros 
console.log(empresas.toLocaleString());
// numero com operadores matematicos realizam operações 
console.log(operacao);
//console.log(operacao.toPrecision);

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
// pesquisar sobre DX
function filtrarLivros(dados){ // meu argumento eu chamo de dados | any : qualquer valor
return dados.filter(item => item.tipo === 'livro'); // 
}
console.log(filtrarLivros(produtos));
