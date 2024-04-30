const blogsDiv = document.querySelector(".blogs");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("http://localhost:7000/blogs");
    const articles = await response.json();

    articles.forEach((articleData) => {
      const articleContainer = document.createElement("div");
      articleContainer.classList.add("article");

      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");

      const image = document.createElement("img");
      image.src = articleData.Image;
      image.alt = articleData.Title;
      imageContainer.appendChild(image);

      articleContainer.appendChild(imageContainer);

      const heading = document.createElement("h1");
      heading.textContent = articleData.Title;

      const brief = document.createElement("p");
      brief.textContent = articleData.Body;

      articleContainer.appendChild(heading);
      articleContainer.appendChild(brief);

      articleContainer.addEventListener("click", () => {
        const url = `editable.html?title=${encodeURIComponent(
          articleData.Title
        )}&intro=${encodeURIComponent(
          articleData.Intro
        )}&all=${encodeURIComponent(articleData.Body)}`;
        window.location.href = url;
      });

      blogsDiv.appendChild(articleContainer);
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
});