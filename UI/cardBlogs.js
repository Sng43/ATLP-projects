const recent = document.querySelector(".next");
const blogsDiv = document.querySelector(".blogs");
const cardsDiv = document.querySelector(".cards");

const articles = JSON.parse(localStorage.getItem("blog")) || [];

console.log(articles)

articles.forEach((articleData) => {
  const articleContainer = document.createElement("div");
  articleContainer.classList.add("article");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const image = document.createElement("img");
  image.src = articleData.image;
  image.alt = articleData.title;
  imageContainer.appendChild(image);

  articleContainer.appendChild(imageContainer);

  const heading = document.createElement("h1");
  heading.textContent = articleData.title;

  const brief = document.createElement("p");
  brief.textContent = articleData.intro;

  articleContainer.appendChild(heading);
  articleContainer.appendChild(brief);

articleContainer.addEventListener("click", () => {
  const url = `editable.html?title=${encodeURIComponent(
    articleData.title
  )}&intro=${encodeURIComponent(articleData.intro)}&all=${encodeURIComponent(
    articleData.full
  )}`;
  window.location.href = url;
});
  blogsDiv.appendChild(articleContainer);
});

