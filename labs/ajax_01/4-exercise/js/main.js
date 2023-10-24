/**
 * Skapa ett textfält och en knapp 'Fetch data'.
 * I textfältet skall man kunna ange ett nummer,
 * som är antal ord som man vill hämta från https://codexplained.se/lorem_json_array.php?numberOfWords= värdet från textfältet
 *
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * https://codexplained.se/lorem_json_array.php?numberOfWords=3
 * https://codexplained.se/lorem_json_array.php?numberOfWords=10
 *
 * Datan skall läggas in i en tabell <table></table>, med 2 kolumner:
 * - Kolumn 1 skall ha rubriken 'Number of words', och innehålla nummret som angavs
 * - Kolumn 2 skall ha rubriken 'Result', och innehålla datan. Datan är en array med ord, där varje ord skall visas i en egen listItem <li>
 *
 * Varje anrop skall hämta och placera datan i en ny rad, i tabellen
 *
 * Skall ungefär se ut på följande sätt:
 * |-----------------|-----------|
 * | Number of words | Result    |
 * |-----------------|-----------|
 * |        2        |   .wer    |
 * |                 |   .sfd    |
 * |-----------------|-----------|
 * |        3        |   .wer    |
 * |                 |   .sfd    |
 * |                 |   .ert    |
 * |-----------------|-----------|
 */

const body = document.body;
const textField = document.querySelector("#text");
const button = document.querySelector("#button");
const results = document.querySelector("#results tbody");

const createRow = (numberOfWords, words) => {
  const row = document.createElement("tr");
  const cellCount = document.createElement("td");
  const cellWords = document.createElement("td");
  const cellWordsList = document.createElement("ul");

  cellCount.innerText = numberOfWords;
  words.forEach((word) => (cellWordsList.innerHTML += `<li>${word}</li>`));

  // Make structure
  cellWords.appendChild(cellWordsList);
  row.appendChild(cellCount);
  row.appendChild(cellWords);
  return row;
};

button.onclick = async () => {
  const numberOfWords = textField.value;
  const url = `https://codexplained.se/lorem_json_array.php?numberOfWords=${numberOfWords}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  results.appendChild(createRow(numberOfWords, data));
};
