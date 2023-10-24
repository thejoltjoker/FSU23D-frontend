/**
 * Skapa 2 knappar, "Previous" och "Next"
 * Dessa knappar anropar samt skickar in ett värde samtidigt, som endast får vara en siffra mellan 0-4
 * Exempel:
 * - Om nuvarande värde är 2, då anropar "Next"-knappen med värde 3
 * - Om nuvarande värde är 1, då anropar "Previous"-knappen med värde 0
 * - Om nuvarande värde är 4 och "Next"-knappen trycks, här får ni välja mellan att inte göra något, eller räkna om från 0.
 * Knapparna anropar och hämtar data från http://codexplained.se/animals_json.php?animal= Värdet som anges. Se exemplen nedan
 *
 *
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * http://codexplained.se/animals_json.php?animal=4
 * http://codexplained.se/animals_json.php?animal=0
 *
 * Datan är en sträng som är separerad med tecknet *
 * Hämta datan och placera in de olika delarna i:
 * <h1>
 * <i>
 * <p>
 * <im>
 *
 * Exempel på hur datan delas upp och läggs in i HTML-elementen:
 *
 * <h1>Slear</h1>
 * <i>A cross between a bear and a sloth</i>
 * <p>Lorum ipsum .......</p>
 * <img src="http://i.imgur.com/MPE8L7D.jpg">
 *
 */

let currentAnimal = 0;
// Add functionality to buttons
const prevButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

const getAnimalData = async (id) => {
  const url = `http://codexplained.se/animals_json.php?animal=${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return await response.json();
  } catch (error) {
    console.log("There has been a problem with your fetch operation:", error);
  }
};

const updateContent = async () => {
  const {
    title,
    summery: summary,
    content,
    img,
  } = await getAnimalData(currentAnimal);

  const titleElement = document.querySelector("#title");
  const summaryElement = document.querySelector("#summary");
  const contentElement = document.querySelector("#content");
  const imageElement = document.querySelector("#image");
  titleElement.innerText = title;
  summaryElement.innerText = summary;
  contentElement.innerText = content;
  imageElement.src = img;
  imageElement.alt = `Picture of ${title}`;
};

// Update current animal id
prevButton.onclick = () => {
  currentAnimal - 1 < 0 ? (currentAnimal = 4) : --currentAnimal;
  updateContent();
};
nextButton.onclick = () => {
  currentAnimal + 1 > 4 ? (currentAnimal = 0) : ++currentAnimal;
  updateContent();
};
updateContent();
