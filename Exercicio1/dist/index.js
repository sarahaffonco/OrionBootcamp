"use strict";
function countVowels(word) {
    const textInput = document.getElementById("idString");
    const text = word || (textInput ? textInput.value : "");
    if (!text) {
        alert("Por favor, insira um texto.");
        return 0;
    }
    const textNormalized = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return textNormalized.split('').reduce((count, letter) => {
        return vowels.includes(letter) ? count + 1 : count;
    }, 0);
}
const word = "Sarah!";
const quantityVowels = countVowels(word);
console.log(`A palavra "${word}" tem ${quantityVowels} vogais.`);
function countVowelsFromForm() {
    const wordInput = document.getElementById("idString");
    const word = wordInput.value;
    const quantityVowels = countVowels(word);
    document.getElementById("idText").textContent = `A palavra "${word}" tem ${quantityVowels} vogais.`;
}
