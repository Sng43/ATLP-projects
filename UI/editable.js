const form = document.getElementById("content");
const blogTitle = form["title"];
const blogImage = form["image"];
const blogIntro = form["intro"];
const blogAll = form["all"];
const editBtn = document.getElementById('#delete')

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

async function deleteBlog (title,id){
  const confirmation = confirm(`Are you sure you want to delete the blog ${title}`);

  if(!confirmation){
    console.log("User canceled deletion");
  }else{
    try{
      await fetch(`http://localhost/7000/blog/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }catch(error){
      console.log(error)
    }
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


// console.log(titleFromUrl);
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
 