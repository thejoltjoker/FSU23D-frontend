/**
 * Skapa ett textfält och en knapp "Roll dices".
 * I textfältet skall man kunna ange ett nummer,
 * som är antal tärningar(slumpad siffra mellan 1-6), som skall hämtas från https://codexplained.se/dice_json_array.php?numberOfDice= värdet från textfältet
 *
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * https://codexplained.se/dice_json_array.php?numberOfDice=1
 * https://codexplained.se/dice_json_array.php?numberOfDice=4
 *
 * Datan skall i sin tur visas i en lista, där varje tärning placeras i en listItem <li>
 */

const textField = document.querySelector("#text");
const button = document.querySelector("#button");
const results = document.querySelector("#results");

// const rollDices = async (numberOfDice = 0) => {
//   const url = new URL("https://codexplained.se/dice_json_array.php");
//   url.searchParams.append("numberOfDice", numberOfDice);

//   const response = await fetch(url);
//   if (response.ok) {
//     return await response.json();
//   } else {
//     return [];
//   }
// };

button.onclick = async () => {
  let rolls = [];
  const url = `https://codexplained.se/dice_json_array.php?numberOfDice=${textField.value}`;
  const response = await fetch(url);
  if (response.ok) {
    rolls = await response.json();
  }
  rolls.forEach((element) => (results.innerHTML += `<li>${element}</li>`));
};
