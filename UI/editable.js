const form = document.getElementById("content");
const blogTitle = form["title"];
const blogImage = form["image"];
const blogIntro = form["intro"];
const blogAll = form["all"];

<<<<<<< HEAD
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
=======
async function fetchBlogData(title) {
  try {
    const response = await fetch(`http://localhost:7000/blog/${title}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}
async function editBlog(title, data) {
   try {
    const response = await fetch(`http://localhost:7000/blog/${title}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
    return null;
  }
}

const getUrlParameter = (name) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
>>>>>>> main
};
const titleFromUrl = getUrlParameter("title");

console.log(titleFromUrl)

if (titleFromUrl) {
  fetchBlogData(titleFromUrl).then((blogData) => {
    if (blogData) {
      blogTitle.value = blogData.Title;
      // blogImage.value = blogData.Image;
      blogIntro.value = blogData.Intro;
      blogAll.value = blogData.Body;
    } else {
      console.error("Blog not found");
    }
  });
}
console.log(titleFromUrl);
const reader = new FileReader();

blogImage.addEventListener("change", function () {
  const file = blogImage.files[0];
  if (file) {
    reader.readAsDataURL(file);
  }
});

reader.onload = function () {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      Title: blogTitle.value,
      Image: reader.result,
      Intro: blogIntro.value,
      Body: blogAll.value,
    };

    editBlog(titleFromUrl, data)

    window.location.assign("Admin-blog.html");
  });

}
 