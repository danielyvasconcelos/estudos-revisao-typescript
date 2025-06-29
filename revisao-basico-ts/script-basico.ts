// digo que produto é uma string 
//let produto: string = 'Livros';

// digo que produto é umnumero 
//let preco: number = 200;

//objeto 
/*
const carro: {
    marca:string;
    portas: number;
} = {
    marca:'Audi',
    portas: 5,
};*/


/* -- CONCEITO DE INFERÊNCIA --
-- O ts consegue inferir o tipo de dado de expressão em javascript sempre que ele coseguir inferir
--  não é necessario escrever e iferir todo tipo de varivavel 
-- boa praticar nÃO notar todo tipo de dado
*/ 

const carro = {
    marca:'Audi',
    portas: 5,
};
// digo que produto é uma string 
let produto = 'Livros';
// digo que produto é umnumero 
let preco = 200;

const barato : boolean | string = preco < 400 ? true: "Preço caro";


function multiplicar (a : number , b: number){
    return a*b;
}
console.log('Função multiplicar : ' + multiplicar(10, 2))



const nitendo ={
 nome: "nitendo",
 preco: "2000",
};

 function tranformarpreco ( produto: { nome: string; preco: string }){
    produto.preco= 'R$ ' + produto.preco;
    return produto; 
 }
// varivel criada para verificar 
 const produtoNovo =  tranformarpreco(nitendo);
 console.log(produtoNovo)