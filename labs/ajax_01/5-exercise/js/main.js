/**
 * Skapa en tabell med 5 kolumner och 2 rader
 * Första raden i tabellen skall innehålla en knapp per kolumn, dvs totalt fem knappar på först raden.
 * - Första knappen skall heta "1", och hämta endast ett ord från https://codexplained.se/lorem_json_array.php?numberOfWords= värdet som anges
 * - Andra knappen skall heta "2", och hämta två ord från samma URL
 * - Tredje knappen skall heta "3", och hämta tre ord från samma URL
 * - Gör samma sak för knapp 4 och 5
 *
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * https://codexplained.se/lorem_json_array.php?numberOfWords=3
 * https://codexplained.se/lorem_json_array.php?numberOfWords=10
 *
 * Varje knapp hämtar datan och placerar datan under respektive knapp, i andra raden.
 * Datan är en array med ord, dessa ord skall visas i en lista där varje ord är en listitem <il>
 *
 *
 * Skall ungefär se ut på följande sätt, efter att varje knapp gjort ett anrop
 * |-----|-----|-----|-----|-----|
 * |  1  |  2  |  3  |  4  |  5  |
 * |-----|-----|-----|-----|-----|
 * |.asd |.asd |.qwe |.qwe |.wer |
 * |     |.weq |.ewr |.gfd |.sfd |
 * |     |     |.ewr |.gfd |.cvx |
 * |     |     |     |.gfd |.dff |
 * |     |     |     |     |.bvc |
 * |-----|-----|-----|-----|-----|
 */
const buttonCount = 5;
const table = document.querySelector("#table");
const buttonRow = document.querySelector("#table thead tr");
const contentRow = document.querySelector("#table tbody tr");

const createList = (parent, elements) => {
  elements.forEach((element) => {
    parent.innerHTML += `<li>${element}</li>`;
  });
  return parent;
};

const createButton = (id) => {
  const btn = document.createElement("button");
  btn.id = "button-" + id;
  btn.innerText = id;

  return btn;
};

const createCell = (id) => {
  const cell = document.createElement("td");
  cell.id = "content-" + id;
  const list = document.createElement("ul");
  cell.appendChild(list);
  return [cell, list];
};

// Init table
for (let i = 1; i <= buttonCount; ++i) {
  console.log(i);
  const buttonCell = document.createElement("th");
  buttonRow.appendChild(buttonCell);

  // Create button
  const button = createButton(i);
  buttonCell.appendChild(button);

  // Create content cell
  const [cell, list] = createCell(i);
  contentRow.appendChild(cell);

  button.onclick = async () => {
    const url = `https://codexplained.se/lorem_json_array.php?numberOfWords=${i}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();

      list.appendChild(createList(list, data));
    } catch (error) {
      console.log("Error:", error);
    }
  };
}
