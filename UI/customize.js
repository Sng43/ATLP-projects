const form = document.getElementById("content");
const titleInput = form["title"];
const imageInput = form["image"];
const introInput = form["intro"];
const bodyInput = form["all"];

const createBlog = async (data) => {
  try {
    const response = await fetch("http://localhost:7000/blogs/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log("Blog created successfully");
      window.location.assign("Admin-blog.html");
    } else {
      console.error("Failed to create blog:", response.statusText);
    }
  } catch (error) {
    console.error("Error creating blog:", error);
  }
};

const reader = new FileReader();

imageInput.addEventListener("change", function () {
  const file = imageInput.files[0];
  if (file) {
    reader.readAsDataURL(file);
  }
});

reader.onload = function () {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      Title: titleInput.value,
      Image: reader.result,
      Intro: introInput.value,
      Body: bodyInput.value
    };

    createBlog(data);
  });
};
