const form = document.getElementById("form");
const nam = document.getElementById("nam");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const description = document.getElementById("description");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validPhone = (phone) => {
  const ph = /^(?:\+[0-9]{1,3})?[0-9]{9,15}$/;

  console.log(ph.test(phone));
  console.log(phone);
  return ph.test(phone);
};

const contact = (e) => {
  e.preventDefault();

  validateInputs();

  if (form.querySelectorAll(".success").length === 4) {
    const emailValue = email.value.trim();
    const nameValue = nam.value.trim();
    const descritpionValue = description.value.trim();

    const new_data = {
      email: emailValue,
      name: nameValue,
      descritpion: descritpionValue,
    };

    if (localStorage.getItem("proj") == null) {
      localStorage.setItem("proj", "[]");
    }

    var old_data = JSON.parse(localStorage.getItem("proj"));

    old_data.push(new_data);

    var json = JSON.stringify(old_data);

    localStorage.setItem("proj", json);
    console.log(localStorage.setItem("proj", json));
  }
};

const validateInputs = () => {
  const emailValue = email.value.trim();
  const nameValue = nam.value.trim();
  const phoneValue = phone.value.trim();
  const descritpionValue = description.value.trim();

  if (nameValue === "") {
    setError(nam, "Name is required");
  } else {
    setSuccess(nam);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
  if (phoneValue === "") {
    setError(phone, "Phone is required");
  } else if (!validPhone(phoneValue)) {
    setError(phone, "Provide a valid phone number");
  } else {
    setSuccess(phone);
  }

  if (descritpionValue === "") {
    setError(description, "Please Enter Description");
  } else {
    setSuccess(description);
  }
};

form.addEventListener("submit", contact);
