const form = document.getElementById("content");
const blogTitle = form["title"];
const blogImage = form["image"];
const blogIntro = form["intro"];
const blogAll = form["all"];

const articles = JSON.parse(localStorage.getItem("Blogs")) || [];

if (articles.length > 0) {
  blogTitle.value = articles[0].title;
  blogIntro.value = articles[0].intro;
  blogAll.value = articles[0].all;
}

form.onsubmit = (e) => {
  e.preventDefault();

  articles[0].title = blogTitle.value;
  articles[0].intro = blogIntro.value;
  articles[0].all = blogAll.value;

  localStorage.setItem("Blogs", JSON.stringify(articles));

  window.location.assign("Admin-blog.html");
};
