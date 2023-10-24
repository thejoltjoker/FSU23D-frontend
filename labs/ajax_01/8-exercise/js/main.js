/**
 * Kopiera in koden från föregående uppgift "4-exercise"
 *
 * Skapa en 3:e länk: 'Blog posts'
 * Beroende på vilken länk man trycker, skall sidans innehåll uppdateras via API anrop till: https://codexplained.se/simple_json.php
 * Notera att länkarna skall EJ ladda om sidan, utan se till att anropen endast uppdaterar en HTML element (ex div#content), där sidans innehåll placeras
 *
 * Klickar man på 'Blog posts'-länken
 *  - Sidan skall innehålla en lista av alla blogg-inlägg, som finns i 'blog_posts'-parametern.
 *  - Ordet lista i detta fall syftar EJ på att man använder <ul>, utan se till att inläggen visas under varann likt en lista
 *  - Varje inlägg skall visa:
 *       - 'title'- parametern som en h2-rubrik
 *       - 'date'- parametern under rubriken i kursiv textstil
 *       - 'text'- parametern under datum, i en egen <p>-element
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
