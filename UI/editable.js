document.addEventListener("DOMContentLoaded", async function () {
  const blogsDiv = document.querySelector(".blogs");

  try {
    const response = await fetch("http://localhost:7000/blogs");
    const articles = await response.json();

    articles.forEach((articleData) => {
      const articleContainer = document.createElement("div");
      articleContainer.classList.add("row");

      const holderDiv = document.createElement("div");
      holderDiv.classList.add("holder");

      const picDiv = document.createElement("div");
      picDiv.classList.add("picz");

      const img = document.createElement("img");
      img.src = articleData.Image; 

      const h3 = document.createElement("h3");
      h3.textContent = articleData.Title; 

      const p = document.createElement("p");
      p.textContent = articleData.Body; 
      
      const actionDiv = document.createElement("div");
      actionDiv.classList.add("action");

      const reactionsDiv = document.createElement("div");
      reactionsDiv.classList.add("reactions");

      const readPostLink = document.createElement("a");
      const url = `article.html?title=${encodeURIComponent(articleData.Title)}`;
      readPostLink.href = url;
      readPostLink.textContent = "Read post";

      const updateButton = document.createElement("button");
      updateButton.textContent = "Update";
      updateButton.addEventListener("click", async () => {
        const updatedData = {
          Title: "Updated Title",
          Image: "path/to/updated/image.jpg",
          Body: "Updated content of the blog post",
        };

        try {
          const response = await fetch(
            `http://localhost:7000/blogs/${articleData._id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedData),
            }
          );
          const updatedPost = await response.json();
          // Update the UI with the updated blog post data if needed
        } catch (error) {
          console.error("Error updating blog post:", error);
        }
      });

      picDiv.appendChild(img);
      holderDiv.appendChild(picDiv);
      holderDiv.appendChild(h3);
      holderDiv.appendChild(p);
      reactionsDiv.appendChild(readPostLink); // No need for like and comment labels as per your backend
      reactionsDiv.appendChild(updateButton); // Add the update button
      actionDiv.appendChild(reactionsDiv);
      holderDiv.appendChild(actionDiv);
      articleContainer.appendChild(holderDiv);
      blogsDiv.appendChild(articleContainer);
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
});
