const form = document.getElementById("content");
const title = form["title"];
const imageInput = form["image"];
const intro = form["intro"];
const full = form["all"];

console.log(title.value)

var blog = JSON.parse(localStorage.getItem("blog")) || [];

console.log(blog)
  const toLocal = (title, image, intro, full) => {
    const entry = {
      title,
      image, 
      intro,
      full,
    };
    blog.push(entry);

    localStorage.setItem("blog", JSON.stringify(blog));

    return entry;
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

      const t = title.value;
      const i = reader.result;
      const it = intro.value;
      const f = full.value;

      const deal = toLocal(t, i, it, f);

      console.log(deal);
      window.location.assign("Admin-blog.html")
    });
  };
