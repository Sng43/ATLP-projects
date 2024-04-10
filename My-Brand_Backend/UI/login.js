function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var userData = JSON.parse(localStorage.getItem("data"));

  console.log(userData)
  if (userData) {
    var validUser = userData.find(function (user) {
      return user.email === email && user.password === password;
    });

    if (validUser) {
      window.location.assign("Admin-dash.html");
    } else {
      document.getElementById("error").innerText = "Invalid email or password";
    }
  } else {
    document.getElementById("error").innerText = "Invalid email or password";
  }

  return false;
}

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    login();
  });
