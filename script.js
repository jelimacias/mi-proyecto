const phrases = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Nunca es tarde para ser lo que podrías haber sido.",
    "La vida es un 10% lo que te ocurre y un 90% cómo reaccionas a ello.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "El futuro pertenece a quienes creen en la belleza de sus sueños."
];

const generateButton = document.getElementById("generateButton");
const phraseElement = document.getElementById("phrase");

generateButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    phraseElement.textContent = phrases[randomIndex];
});
