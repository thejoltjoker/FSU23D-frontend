/**
 * Skapa en knapp "Fetch data".
 * När man klickar på knappen,
 * så skall texten från http://codexplained.se/lorem_text.php hämtas och visas på sidan.
 * Hämta texten med hjälp av AJAX, se kodgenomgången
 */
const body = document.body;

const button = document.querySelector("#button");

button.onclick = async () => {
  const response = await fetch("http://codexplained.se/lorem_text.php");
  const text = await response.text();
  document.querySelector("#text").innerText = text;
};
