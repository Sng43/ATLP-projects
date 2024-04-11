document.addEventListener("DOMContentLoaded", function () {
  var subsData = JSON.parse(localStorage.getItem("proj"));

  var tbody = document.querySelector(".queries tbody");

  if (subsData && subsData.length > 0) {
    tbody.innerHTML = "";

    subsData.forEach(function (sub) {
      var row = document.createElement("tr");

      var emailCell = document.createElement("td");
      emailCell.textContent = sub.email;
      row.appendChild(emailCell);

      var descriptionCell = document.createElement("td");
      descriptionCell.textContent = sub.descritpion; 
      row.appendChild(descriptionCell);

      tbody.appendChild(row);
    });
  }
});
