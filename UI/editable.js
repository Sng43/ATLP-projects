const form = document.getElementById("content");
const urlInfo = new URLSearchParams(window.location.search);
const blogTitle = form.querySelector("#title");
const blogImage = form.querySelector("#image");
const blogIntro = form.querySelector("#intro");
const blogBody = form.querySelector("#body");

const updateArticle = async (title, image, intro, body) => {
  try {
    const response = await fetch(
      `http://localhost:7000/blog/${encodeURIComponent(title)}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Title: title,
          Image: image,
          Intro: intro,
          Body: body,
        }),
      }
    );
    if (response.ok) {
      console.log("Article updated successfully!");
      window.location.assign("Admin-blog.html");
    } else {
      console.error("Failed to update article:", response.statusText);
    }
  } catch (error) {
    console.error("Error updating article:", error);
  }
};

blogTitle.value = urlInfo.get("Title");
blogIntro.value = urlInfo.get("Intro");
blogBody.value = urlInfo.get("Body");

const picture = new FileReader();

blogImage.addEventListener("change", function () {
  const pic = blogImage.files[0];
  if (pic) {
    picture.readAsDataURL(pic);
  }
});

picture.onload = () => {
  form.onsubmit = (e) => {
    e.preventDefault();

    const title = blogTitle.value;
    const image = picture.result;
    const intro = blogIntro.value;
    const body = blogBody.value;

    updateArticle(title, image, intro, body);
  };
};
