const form = document.getElementById("content");
const urlInfo = new URLSearchParams(window.location.search);
const blogTitle = form["title"];
const blogImage = form["image"];
const blogIntro = form["intro"];
const blogAll = form["all"];

const articles = JSON.parse(localStorage.getItem("blog")) || [];

blogTitle.value = urlInfo.get("title");

const index = articles.findIndex((rec) => rec.title === blogTitle.value);

blogIntro.value = articles[index].intro;
blogAll.value = articles[index].full;

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
    
    var title = blogTitle.value;
    const image = picture.result;
    var intro = blogIntro.value;
    var full = blogAll.value;
    
    articles[index] = { title, image, intro, full };
    localStorage.setItem("blog", JSON.stringify(articles));
    window.location.assign("Admin-blog.html");
  };
};
  