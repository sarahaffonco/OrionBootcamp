function countVowels(word?: string): number {
  const textInput = document.getElementById("idString") as HTMLInputElement;
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

function countVowelsFromForm(): void {
  const wordInput = document.getElementById("idString") as HTMLInputElement;
  const word = wordInput.value;
  const quantityVowels = countVowels(word);
  document.getElementById("idText")!.textContent = `A palavra "${word}" tem ${quantityVowels} vogais.`;
}
