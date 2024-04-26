const form = document.getElementById("form");
const nam = document.getElementById("nam");
const email = document.getElementById("email");
const description = document.getElementById("description");

const createQuery = async (data) => {
  try {
    const response = await fetch("http://localhost:7000/query/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert("Description sent");
    } else {
      console.error("Failed send:", response.statusText);
    }
  } catch (error) {
    console.error("Error sending request:", error);
  }
};

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

const validateInputs = () => {
  const emailValue = email.value.trim();
  const nameValue = nam.value.trim();
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
  if (descritpionValue === "") {
    setError(description, "Please Enter Description");
  } else {
    setSuccess(description);
  }
};

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  validateInputs();

  if (form.querySelectorAll(".success").length === 3) {
    const emailValue = email.value.trim();
    const nameValue = nam.value.trim();
    const descriptionValue = description.value.trim();

    var new_data = {
      Name: nameValue,
      Email: emailValue,
      Description: descriptionValue
    };
    try {
      await createQuery(new_data);
      email.value = "";
      nam.value = "";
      description.value = "";
    } catch (error) {
      console.error("Error sending query:", error);
    }
  }
});
