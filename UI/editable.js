const form = document.getElementById("content");
const blogTitle = form["title"];
const blogImage = form["image"];
const blogIntro = form["intro"];
const blogAll = form["all"];

const articles = JSON.parse(localStorage.getItem("blog")) || [];

console.log(articles)
if (articles.length == 0)
{
  blogTitle.value = ""
  blogIntro.value = ""
  blogAll.value = ""

}else {
  blogTitle.value = articles[0].title;
  blogIntro.value = articles[0].intro;
  blogAll.value = articles[0].full;
}
console.log(blogTitle.value)

form.onsubmit = (e) => {
  e.preventDefault();

  articles[0].title = blogTitle.value;
  articles[0].intro = blogIntro.value;
  articles[0].full = blogAll.value;

  localStorage.setItem("blogs", JSON.stringify(articles));

  window.location.assign("Admin-blog.html");
};