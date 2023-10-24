/**
 * Kopiera in din lösning från övning 2
 * Följande skall justeras
 *
 * Anropet sker nu istället till följande URL: https://codexplained.se/dice_json_array_slow.php?numberOfDice=
 * Det gör samma saker, men anropet är betydligt långsammare via den nya URL:en
 * Medan anropet görs, skall en img/loading.gif bild visas, för att visa att anropet håller på att laddas/utföras.
 * Så fort datan har hämtats, ta bort gif-bilden och visa resultet i en ny rad i tabellen.
 *
 *
 */
const body = document.body;
const textField = document.querySelector("#text");
const button = document.querySelector("#button");
const results = document.querySelector("#results");

button.onclick = async () => {
  // Show spinner while loading
  const spinner = document.createElement("img");
  spinner.src = "./img/loading.gif";
  body.appendChild(spinner);

  // Make request
  const url = new URL("https://codexplained.se/dice_json_array_slow.php");
  url.searchParams.append("numberOfDice", textField.value);
  const rolls = await fetch(url)
    .then((response) => {
      if (response.ok) {
        spinner.remove();
        return response.json();
      }
      throw new Error("Something went wrong");
    })
    .then((rolls) => {
      rolls.forEach((element) => (results.innerHTML += `<li>${element}</li>`));
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(rolls);
};
