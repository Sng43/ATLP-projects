document.addEventListener("DOMContentLoaded", function () {
  // Retrieve data from local storage using the key "proj"
  var subsData = JSON.parse(localStorage.getItem("proj"));

  // Get table body element
  var tbody = document.querySelector(".queries tbody");

  // Check if there's data in local storage
  if (subsData && subsData.length > 0) {
    // Clear existing table rows
    tbody.innerHTML = "";

    // Iterate through the data and create table rows
    subsData.forEach(function (sub) {
      var row = document.createElement("tr");

      // Create table cells for email and description
      var emailCell = document.createElement("td");
      emailCell.textContent = sub.email;
      row.appendChild(emailCell);

      var descriptionCell = document.createElement("td");
      descriptionCell.textContent = sub.descritpion; // Access description property, handle undefined case
      row.appendChild(descriptionCell);

      // Append row to table body
      tbody.appendChild(row);
    });
  }
});
