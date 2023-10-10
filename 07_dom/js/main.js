/*
 * Element selectors
 */
console.log("############ getElementById ############");

let myTitle = document.getElementById('title');
console.log(myTitle);
myTitle.innerHTML = "<i>Some dummy title</i>"; // Executes HTML tags
// myTitle.innerText = "<i>Some dummy title</i>";    // Displays HTML tags as content
console.log(myTitle.innerHTML);




console.log("############ getElementsByClassName ############");
// getElementsByClassName
// returns HTMLCollection
// Similar to an array, having elements indexed and even having properties such as .length
// Read more about HTMLCollections: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
let boxes = document.getElementsByClassName('box');
console.log(boxes);
console.log(boxes[2]);
console.log(boxes.length);

// for (let i of boxes) {
for (let i = 0; i < boxes.length; i++) {
  console.log(i)
  boxes[i].style.margin = "5px";
  // boxes[i].style.backgroundColor = "skyblue";
}


console.log("############ getElementsByTagName ############");
// getElementsByTagName
// returns HTMLCollection
// Similar to an array, having elements indexed and even having properties such as .length
// Read more about HTMLCollections: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection

let dives = document.getElementsByTagName('div');
console.log(dives);
console.log(dives[2]);
console.log(dives.length);

// for (let i of dives) {
for (let i = 0; i < dives.length; i++) {
  console.log(i)
  dives[i].style.borderRadius = "50%";
}

console.log("############ querySelector ############");
let section = document.querySelector("#content section");
section.style.border = "3px solid orange";


console.log("############ querySelectorAll ############");
// querySelectorAll
// returns NodeList
// Similar to an array, having elements indexed and even having properties such as .length
// Read more about NodeList: https://developer.mozilla.org/en-US/docs/Web/API/NodeList

dives = document.querySelectorAll("div.box");
console.log(dives);


console.log(dives);
console.log(dives[2]);
console.log(dives.length);


/**
 * 
 * HTML attributes
 */
console.log("############ HTML attributes ############");
let myLink = document.getElementById('link');
console.log(myLink);
console.log(myLink.href);
myLink.href = "###"
console.log(myLink.href);

// myLink.target = "_blank"
// My also work with attributes with the built in function setAttribute()
myLink.setAttribute('target', '_blank');




/**
 * Handle events
 * some events: click | submit | mouseover | keypress
 */
console.log("############ Events ############");
myLink = document.getElementById('link');
myLink.addEventListener('click', function(e) {
  // Prevents the default behvaior of an element.
  // In this case prevents the linkn from reloading the page OR opening a new tab
  e.preventDefault();
  alert('You just pressed the link')
})


// let thirdCircle = document.querySelectorAll('.box');
// console.log(thirdCircle[2]);
let thirdCircle = document.querySelector('.box:nth-child(3)');
console.log(thirdCircle);
thirdCircle.addEventListener('mouseover', function(e) {
  // e.target is the third circle
  e.target.innerHTML = "You just hovered over the third box"
})
thirdCircle.addEventListener('mouseout', function(e) {
  // e.target is the third circle
  e.target.innerHTML = ""
})



/**
 * Navigation
 */
console.log("############ Navigation ############");
let main = document.getElementById('content');
console.log(main);
console.log(main.firstElementChild);
console.log(main.lastElementChild);
console.log(main.children);
console.log(main.children[2]); // Third child
console.log(main.parentNode);
console.log(main.previousElementSibling);
console.log(main.nextElementSibling);

// Target the fifth circle. Add text "Fifth circle"
main.children[4].innerText = "Fifth circle";
// Target the link in the beige box. Add a smiley at the end of the link text :)
main.lastElementChild.firstElementChild.innerText += " :)"
// Target the main headline. Add a smiley at the end of the text :)
main.previousElementSibling.innerText += " :)"

/**
 * Add/Create/Remove elements
 */
console.log("############ Add/Create/Remove elements ############");
main = document.getElementById('content');

for (let i = 1; i <= 5; i++) {
  let newBox = document.createElement("section");
  newBox.innerText = "Box " + i
  newBox.classList.add('box')
  newBox.style.margin = "5px";
  newBox.style.backgroundColor = "lightgreen";
  console.log(newBox);

  newBox.addEventListener('click', function(e) {
    // alert('You just pressed ' + e.target.innerHTML)

    // removes the clicked box
    e.target.remove()
  })

  
  // Appends the newly created element at the end of main
  main.append(newBox)
}













console.log('*********************** Exercises *************************');


/*
 * Övningar: DOM och events
 */

/* 
1)

Ändra titlen högst upp till, 'Learning how to handle JS DOM and events'
Använd getElementById och innerHTML
*/





/* 
2)

Ersätt cirklarnas CSS klass .box med .green-box
Googla hur man tar bort/lägger till klasser på element, med JS.

Använd getElementsByTagName för att först hämta alla element, samt for-loop för att ersätta alla klasser
*/




/* 
3)

Cirklarnas height och width satt till 100px, via CSS klassen .green-box.
Ändra cirklarnas height och width till 120px.
Googla hur man ändrar ett elements höjd och bredd i JS.

Använd getElementsByClassName för att först hämta alla element, samt for-loop för att göra ändringen

*/





/* 
4)

Ge Box: 5 en orange border.

Använd querySelector för att först hämta elementet
*/





/* 
5)

Lägg till en ny länk 'My second link :)' i den beiga boxen

Använd getElementById för att hämta den beiga boxen
Använd createElement för att skapa den nya länken
Använd appendChild för att lägga till länken till den beiga boxen
*/



/* 
6)

Lägg till attributet href med värdet '#####', till den nya länken
Lägg till attributet target med värdet _blank' till den nya länken

Använd setAttribute för att lägga till de nya attributen
*/



/* 
7)

Lägg till en ny img-tagg (bild) i main#content

Lägg till attributet src med ett frivilligt värdet
Lägg till attributet width med värdet 100
Lägg till attributet height med värdet 100
*/




/* 
8)

Lägg till en eventlistener 'mouseover' på din bild, som skriver ut en text via alert();
*/





/* 
9)

Lägg till en eventlistener på din länk från övning 5, som skall radera allt innehåll i den beiga boxen

Använd DOM navigeringen mySecondLink.parentNode för att hämta beiga boxen, som då är förälder till länken.
*/






/* 
10)

Skapa en ny section
Lägg till en border till den nyskapta sektionen
Justera sektionens height till 100px
Justera sektionens width till 200px

Skapa 2 st buttons med texten
- "Green"
- "Blue"

Lägg till eventlistener på alla 2 knappar, som justerar den nyskapta sektionens bakgrundsfärg
Knappen "Green" ändrar bakgrundsfärgen till grön osv.

Lägg alla 2 knappar innanför sektionen
Lägg till sektionen i main#content
*/

