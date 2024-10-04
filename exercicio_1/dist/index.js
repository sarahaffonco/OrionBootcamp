"use strict";
function countVowels(word) {
    const textInput = document.getElementById("idString");
    const text = word || (textInput ? textInput.value : "");
    if (!text) {
        alert("Por favor, insira um texto.");
        return 0;
    }
    const textLowerCase = text.toLowerCase();
    const vowels = ['a', 'á', 'à', 'ã', 'â', 'e', 'é', 'è', 'ê', 'i', 'í', 'ì', 'î', 'o', 'ó', 'ò', 'õ', 'ô', 'u', 'ú', 'ù', 'û'];
    return textLowerCase.split('').reduce((count, letter) => {
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
