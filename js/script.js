const name = prompt("Qual è il tuo nome?");
const lastName = prompt("Qual è il tuo cognome?");
const color = prompt("Qual è il tuo colore prefeito?");

const output = name + lastName + color + 23;

console.log(output);

document.getElementById("password").innerHTML = output;