const form = document.getElementById("content");
const blogTitle = form["title"];
const blogImage = form["image"];
const blogIntro = form["intro"];
const blogAll = form["all"];

var blog = JSON.parse(localStorage.getItem("Blogs")) || [];

const keepInfo = (title, intro, all) => {
  if (!Array.isArray(blog)) {
    blog = [];
  }
  blog.push({
    title,
    intro,
    all,
  });

  localStorage.setItem("Blogs", JSON.stringify(blog));
  return { title, intro, all };
};
form.onsubmit = (e) => {
  e.preventDefault();

  const newTitle = blogTitle.value;
  const newIntro = blogIntro.value;
  const newAll = blogAll.value;

  const newBlog = keepInfo(newTitle, newIntro, newAll);

  window.location.assign("Admin-blog.html");

  console.log(newBlog);
};
