const recent = document.querySelector(".next");
const blogsDiv = document.querySelector(".blogs");
const cardsDiv = document.querySelector(".cards");

const articles = JSON.parse(localStorage.getItem("blog")) || [];

articles.forEach((article) => {
  
  const articleContainer = document.createElement("div");
  articleContainer.classList.add("article");
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  
  const image = document.createElement("img");
  image.src = article.image;
  image.alt = article.title;
  imageContainer.appendChild(image)
  
  
  const heading = document.createElement("h1");
  heading.textContent = article.title;
  
  const brief = document.createElement("p");
  brief.textContent = article.intro;
  
  articleContainer.append(imageContainer,heading, brief);
  
  blogsDiv.append(articleContainer);
  
  const containers = blogsDiv.querySelectorAll(".article")
  
  articleContainer.addEventListener("click", () => {
    var url = `editable.html?title=${encodeURIComponent(article.title)}`;
    window.location.assign(url);
    
    
  });
  
});