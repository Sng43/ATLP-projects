const recent = document.querySelector(".next");
const blogsDiv = document.querySelector(".blogs");
const cardsDiv = document.querySelector(".cards");

const articles = JSON.parse(localStorage.getItem("Blogs")) || [];

articles.forEach((articleData) => {
  const articleContainer = document.createElement("div");
  articleContainer.classList.add("article");

  // Create image container
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  // Create image element
  const image = document.createElement("img");
  image.src = articleData.image; // Assuming image URL is stored in articleData.image
  image.alt = articleData.title; // Assuming image alt text is the article title
  imageContainer.appendChild(image);

  // Append image container to article container
  articleContainer.appendChild(imageContainer);

  // Create heading element
  const heading = document.createElement("h1");
  heading.textContent = articleData.title;

  // Create brief element
  const brief = document.createElement("p");
  brief.textContent = articleData.intro;

  // Append heading and brief to article container
  articleContainer.appendChild(heading);
  articleContainer.appendChild(brief);

articleContainer.addEventListener("click", () => {
  // Construct the URL for editable.html with parameters
  const url = `editable.html?title=${encodeURIComponent(
    articleData.title
  )}&intro=${encodeURIComponent(articleData.intro)}&all=${encodeURIComponent(
    articleData.all
  )}`;

  // Navigate to editable.html with the respective blog data displayed
  window.location.href = url;
});


  blogsDiv.appendChild(articleContainer);
});
