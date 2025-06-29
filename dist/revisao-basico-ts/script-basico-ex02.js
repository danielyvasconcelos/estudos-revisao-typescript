"use strict";
// Seleciona o elemento input no HTML.
const input = document.querySelector("input");
// Tenta carregar o valor "total" do armazenamento local (localStorage).
const total1 = localStorage.getItem("total");
// Se o input e um valor salvo existirem, inicializa o input com o valor salvo
// e calcula o ganho inicial.
if (input && total1) {
    input.value = total1;
    calcularGanho(Number(input.value));
}
// Calcula o ganho com base em um 'value' numérico e exibe no parágrafo.
function calcularGanho(value) {
    const p = document.querySelector('p');
    if (p) {
        // Fórmula do ganho: valor + 100 - 20% do valor.
        p.innerText = `ganho total:${value + 100 - value * 0.2}`;
    }
}
// Chamada quando o input muda: atualiza o valor, salva no localStorage e recalcula o ganho.
function totalMudou() {
    if (input) {
        const value = Number(input.value);
        localStorage.setItem("total", input.value); // Salva o valor atual do input.
        calcularGanho(value);
    }
}
// Adiciona um "ouvinte" ao input: executa 'totalMudou' a cada tecla solta.
if (input) {
    input.addEventListener("keyup", totalMudou);
}
