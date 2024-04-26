document.addEventListener("DOMContentLoaded", async function () {
  const blogsDiv = document.querySelector(".blogs");

  try {
    const response = await fetch("http://localhost:7000/blogs");
    const articles = await response.json();

    articles.forEach((articleData) => {
      const articleContainer = document.createElement("div");
      articleContainer.classList.add("row");

      const holderDiv = document.createElement("div");
      holderDiv.classList.add("holder");

      const picDiv = document.createElement("div");
      picDiv.classList.add("picz");

      const img = document.createElement("img");
      img.src = articleData.Image;

      const h3 = document.createElement("h3");
      h3.textContent = articleData.Title; 

      const p = document.createElement("p");
      p.textContent = articleData.Intro; 

      const actionDiv = document.createElement("div");
      actionDiv.classList.add("action");

      const reactionsDiv = document.createElement("div");
      reactionsDiv.classList.add("reactions");

      const readPostLink = document.createElement("a");
      const url = `article.html?title=${encodeURIComponent(articleData.Title)}`;
      readPostLink.href = url;
      readPostLink.textContent = "Read post";

      picDiv.appendChild(img);
      holderDiv.appendChild(picDiv);
      holderDiv.appendChild(h3);
      holderDiv.appendChild(p);
      reactionsDiv.appendChild(readPostLink);
      actionDiv.appendChild(reactionsDiv);
      holderDiv.appendChild(actionDiv);
      articleContainer.appendChild(holderDiv);
      blogsDiv.appendChild(articleContainer);
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
});