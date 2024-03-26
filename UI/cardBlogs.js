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
  imageContainer.appendChild(image)
  
  
  const heading = document.createElement("h1");
  heading.textContent = articleData.title;
  
  const brief = document.createElement("p");
  brief.textContent = articleData.intro;
  
  articleContainer.append(imageContainer,heading, brief);
  
  blogsDiv.append(articleContainer);
  
  const containers = blogsDiv.querySelectorAll(".article")
  console.log(containers)

  articleContainer.addEventListener("click", () => {
    const url = `editable.html?title=${encodeURIComponent(
      articleData.title
      )}&image=${encodeURIComponent(
        articleData.image
        )}&intro=${encodeURIComponent(articleData.intro)}&all=${encodeURIComponent(
          articleData.all
          )}`;
          window.location.href = url;
        });
      });
      