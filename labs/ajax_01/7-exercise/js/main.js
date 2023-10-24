/**
 *
 * Skapa en meny med 3 länkar: 'Blog posts', 'Author', 'About'
 * Beroende på vilken länk man trycker, skall sidans innehåll uppdateras via API anrop till: https://codexplained.se/simple_json.php
 * Notera att länkarna skall EJ ladda om sidan, utan se till att anropen endast uppdaterar en HTML element (ex div#content), där sidans innehåll placeras
 *
 * Klickar man på 'About'-länken
 *  - Visa då endast en rubrik "About" tillsammans med tagsen som finns i 'about'-parametulrn
 *
 * Klickar man på 'Author'-länken
 *  - Visa då endast en rubrik "Author" tillsammans med texten som finns i 'author'-parametern
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
