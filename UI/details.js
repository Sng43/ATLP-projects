document.addEventListener("DOMContentLoaded", async () => {
  const detail = document.querySelector(".details");
  const next = document.querySelector(".next");
  const previous = document.querySelector(".prev");
  const heart = document.querySelector(".fa-solid.fa-heart");
  const share = document.querySelector(".fa-solid.fa-paper-plane");
  const urlInfo = new URLSearchParams(window.location.search);
  let currentIndex = 0;

  try {
    const getUrlParameter = (name) => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    };
    const title = getUrlParameter("title");
    const response = await fetch(`http://localhost:7000/blog/${title}`);
    const article = await response.json();

    function displayArticle() {
      detail.innerHTML = "";

      const articleContainer = document.createElement("div");
      articleContainer.classList.add("container");

      const titleElement = document.createElement("h2");
      titleElement.textContent = article.Title;

      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");

      const image = document.createElement("img");
      image.src = article.Image;
      image.alt = article.Title;
      imageContainer.appendChild(image);

      const moreInfo = document.createElement("div");
      moreInfo.classList.add("more-info");

      const introduction = document.createElement("p");
      introduction.textContent = article.Intro;

      const more = document.createElement("p");
      more.textContent = article.Body;

      moreInfo.append(introduction, more);

      articleContainer.append(titleElement, imageContainer, moreInfo);
      detail.appendChild(articleContainer);
    }

    displayArticle();

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

    heart.addEventListener("click", () => {
      heart.style.color = "red";
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
  }
});
const comment = document.querySelector("#comment");
const btn = document.querySelector(".send");

btn.addEventListener("click", async function (e) {
  const comments = {
    comment: comment.value,
  };
  console.log(comments);
  e.preventDefault();

  const sendComment = async (comment) => {
    try {
      const response = await fetch("http://localhost:7000/comments/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      if (response.ok) {
        alert("Comment sent");
      } else {
        console.log("failed to send comment");
      }
    } catch (error) {
      console.log(error);
    }
  };

  try {
    await sendComment(comments);
  } catch (error) {
    console.log("error sending the comment");
  }
});
