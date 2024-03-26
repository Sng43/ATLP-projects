document.addEventListener("DOMContentLoaded", () => {
  const detail = document.querySelector(".details");
  const next = document.querySelector(".next");
  const previous = document.querySelector(".prev");

  const articles = JSON.parse(localStorage.getItem("blog"));
  let currentIndex = 0;

  function displayArticle(index) {
    // Clear the detail container
    detail.innerHTML = "";

    // Retrieve the current article
    const currentArticle = articles[index];

    // Create elements for the article details
    const articleContainer = document.createElement("div");
    articleContainer.classList.add("container");

    const title = document.createElement("h2");
    title.textContent = currentArticle.title;

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const image = document.createElement("img");
    image.src = currentArticle.image;
    image.alt = currentArticle.title;
    imageContainer.appendChild(image);

    const moreInfo = document.createElement("div");
    moreInfo.classList.add("more-info");

    const introduction = document.createElement("h4");
    introduction.textContent = currentArticle.intro;

    const more = document.createElement("p");
    more.textContent = currentArticle.full;

    moreInfo.append(introduction, more);

    articleContainer.append(title, imageContainer, moreInfo);
    detail.appendChild(articleContainer);
  }

  // Display the first article initially
  displayArticle(currentIndex);

  next.addEventListener("click", () => {
    if (currentIndex < articles.length - 1) {
      currentIndex++;
      displayArticle(currentIndex);
    } else {
      console.log("No next article available");
    }
  });

  previous.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      displayArticle(currentIndex);
    } else {
      console.log("No previous article available");
    }
  });
});
