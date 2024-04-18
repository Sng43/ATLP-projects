const form = document.getElementById("content");
const blogTitle = form["title"];
const blogImage = form["image"];
const blogIntro = form["intro"];
const blogAll = form["all"];

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

const getUrlParameter = (name) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
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

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const t = blogTitle.value;
  const i = blogImage.value;
  const it = blogIntro.value;
  const f = blogAll.value;

  try {
    const response = await fetch(`http://localhost:7000/blog/${titleFromUrl}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: t,
        image: i,
        intro: it,
        full: f,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
    window.location.assign("Admin-blog.html");
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
});
