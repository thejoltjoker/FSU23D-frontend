/**
 * Kopiera in koden från föregående uppgift "5-exercise"
 *
 * Bygg vidare på inläggslistan
 * - Se till att varje inlägg visar tillhörande taggar, under inläggs-texten. Nedan illustrerar hur ett inlägg bör se ut.
 *
 *
 *
 * Today is awesome!
 *
 * 2015-11-18
 *
 * Bacon ipsum dolor amet pastrami tenderloin pork chop jerky corned beef ground round bresaola flank.
 * Salami porchetta pancetta tenderloin, flank shoulder turducken pig jerky filet mignon.
 * Flank sausage leberkas corned beef venison hamburger.
 * Turkey pork loin short ribs meatball shankle sausage leberkas, bresaola pancetta pork jerky.
 * Beef ribs flank corned beef pastrami.
 *
 *      Tags: Bacon ipsum, tenderloin, pork, jerky, pancetta, pastrami
 *
 *
 */

const contentElem = document.querySelector("#content");

const getData = async () => {
  const url = "https://codexplained.se/simple_json.php";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("There has been a problem with your fetch operation:", error);
  }
};

const blogLink = document.querySelector("#menu-blog");
const authorLink = document.querySelector("#menu-author");
const aboutLink = document.querySelector("#menu-about");

const populateBlog = () => {};

const clearContent = () => {
  contentElem.innerHTML = "";
};

const addAuthor = (title, text) => {
  const article = document.createElement("article");

  // Title
  const titleElem = document.createElement("h1");
  titleElem.innerText = title;
  article.appendChild(titleElem);

  // Date
  const textElem = document.createElement("p");
  textElem.innerText = text;
  article.appendChild(textElem);

  return article;
};
const addAbout = (title, text) => {
  const article = document.createElement("article");

  // Title
  const titleElem = document.createElement("h1");
  titleElem.innerText = title;
  article.appendChild(titleElem);

  // Date
  const textElem = document.createElement("p");
  textElem.innerText = text;
  article.appendChild(textElem);

  return article;
};

const addBlogPost = (title, date, text, tags) => {
  const post = document.createElement("article");

  // Title
  const titleElem = document.createElement("h2");
  titleElem.innerText = title;
  post.appendChild(titleElem);

  // Date
  const dateElem = document.createElement("i");
  dateElem.innerText = date;
  post.appendChild(dateElem);

  // Text
  const textElem = document.createElement("p");
  textElem.innerText = text;
  post.appendChild(textElem);

  // Tags
  const tagsElem = document.createElement("ul");
  tags.unshift("Tags:");
  tags.forEach((tag) => {
    const tagElem = document.createElement("li");
    tagElem.innerText = tag;
    tagsElem.appendChild(tagElem);
  });
  post.appendChild(tagsElem);

  return post;
};

blogLink.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = await getData();
  // Clear existing content before add new
  clearContent();

  // Add blog posts
  data.blog_posts.forEach((post) => {
    contentElem.appendChild(addBlogPost(...Object.values(post)));
  });
});

authorLink.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = await getData();

  // Clear existing content before add new
  clearContent();

  // Add blog posts

  contentElem.appendChild(addAuthor("Author", data.author));
});

aboutLink.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = await getData();
  // Clear existing content before add new
  clearContent();

  // Add about page
  contentElem.appendChild(addAbout("About", data.about));
});
