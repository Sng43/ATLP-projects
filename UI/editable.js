const form = document.getElementById("content");
const blogTitle = form["title"];
const blogImage = form["image"];
const blogIntro = form["intro"];
const blogAll = form["all"];

const articles = JSON.parse(localStorage.getItem("blog")) || [];

// Function to get parameter from URL
const getUrlParameter = (name) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

// Get the title parameter from the URL
const titleFromUrl = getUrlParameter("title");

// Find the article with the matching title in local storage
const articleToUpdate = articles.find(
  (article) => article.title === titleFromUrl
);

console.log(articleToUpdate);

if (articleToUpdate) {
  // Check if articleToUpdate.image is a Base64 string
  if (
    typeof articleToUpdate.image === "string" &&
    articleToUpdate.image.startsWith("data:image")
  ) {
    // If it's a Base64 string, create a new Image element
    const image = new Image();

    // When the image is loaded, set the image source to the Base64 data
    image.onload = function () {
      const imagePreview = document.getElementById("image-preview");
      if (imagePreview) {
        imagePreview.src = articleToUpdate.image;
      }
    };

    // Set the image source to the Base64 data
    image.src = articleToUpdate.image;
  } else {
    console.error(
      "articleToUpdate.image is not a valid Base64 string:",
      articleToUpdate.image
    );
  }

  blogTitle.value = articleToUpdate.title;
  blogIntro.value = articleToUpdate.intro;
  blogAll.value = articleToUpdate.full;
}

form.onsubmit = (e) => {
  e.preventDefault();

  // Update the article with data from the form
  if (articleToUpdate) {
    articleToUpdate.intro = blogIntro.value;
    articleToUpdate.all = blogAll.value;

    // Update local storage
    localStorage.setItem("blog", JSON.stringify(articles));

    window.location.assign("Admin-blog.html");
  } else {
    console.error("Article not found.");
  }
};
