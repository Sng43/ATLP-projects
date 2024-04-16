function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  fetch("http://localhost:7000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Check the response from the server
      if (data && data._id) {
        // Successful login
        window.location.assign("Admin-dash.html");
      } else {
        // Failed login
        document.getElementById("error").innerText =
          "Invalid email or password";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return false;
}

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    login();
  });
