document.addEventListener("DOMContentLoaded", function () {
  const blogsDiv = document.querySelector(".blogs");

  // Retrieve data from local storage
  const articles = JSON.parse(localStorage.getItem("Blogs")) || [];

  // Loop through each article and create HTML elements
  articles.forEach((articleData) => {
    const articleContainer = document.createElement("div");
    articleContainer.classList.add("row");

    const holderDiv = document.createElement("div");
    holderDiv.classList.add("holder");

    const picDiv = document.createElement("div");
    picDiv.classList.add("picz");

    const img = document.createElement("img");
    img.src = articleData.image; // Assuming image URL is stored in the article object

    const h3 = document.createElement("h3");
    h3.textContent = articleData.title;

    const p = document.createElement("p");
    p.textContent = articleData.content; // Assuming content is stored in the article object

    const actionDiv = document.createElement("div");
    actionDiv.classList.add("action");

    const reactionsDiv = document.createElement("div");
    reactionsDiv.classList.add("reactions");

    const likeLabel = document.createElement("label");
    const likeIcon = document.createElement("i");
    likeIcon.classList.add("fa-regular", "fa-heart");
    const likeCheckbox = document.createElement("input");
    likeCheckbox.type = "checkbox";
    likeCheckbox.id = "like";
    likeLabel.appendChild(likeIcon);
    likeLabel.appendChild(likeCheckbox);

    const commentLabel = document.createElement("label");
    const commentIcon = document.createElement("i");
    commentIcon.classList.add("fa-regular", "fa-comment");
    const commentCheckbox = document.createElement("input");
    commentCheckbox.type = "checkbox";
    commentCheckbox.id = "comment";
    commentLabel.appendChild(commentIcon);
    commentLabel.appendChild(commentCheckbox);

    const readPostLink = document.createElement("a");
    readPostLink.href = "#"; // Assuming the link should lead to the full article
    readPostLink.textContent = "Read post";

    // Appending elements to their respective parent elements
    picDiv.appendChild(img);
    holderDiv.appendChild(picDiv);
    holderDiv.appendChild(h3);
    holderDiv.appendChild(p);
    reactionsDiv.appendChild(likeLabel);
    reactionsDiv.appendChild(commentLabel);
    actionDiv.appendChild(reactionsDiv);
    actionDiv.appendChild(readPostLink);
    holderDiv.appendChild(actionDiv);
    articleContainer.appendChild(holderDiv);

    // Append the article container to the blogs div
    blogsDiv.appendChild(articleContainer);
  });
});
