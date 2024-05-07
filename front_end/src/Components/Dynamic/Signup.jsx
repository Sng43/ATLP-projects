import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const navigate = useNavigate()

  const validateInputs = () => {
    let isValid = true;
    const newErrors = {
      username: "",
      email: "",
      password: "",
      password2: "",
    };

    if (username.trim() === "") {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail(email)) {
      newErrors.email = "Provide a valid email address";
      isValid = false;
    }

    if (password.trim() === "") {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
      isValid = false;
    }

    if (password2.trim() === "") {
      newErrors.password2 = "Please confirm your password";
      isValid = false;
    } else if (password2 !== password) {
      newErrors.password2 = "Passwords don't match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateInputs()) {
      const user = { username, email, password};
      await getUser(user)
      navigate('/login')
      console.log(user);
    }
  };

        async function getUser(user) {
          await fetch("http://localhost:7000" + "/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
        }

  const isValidEmail = (email) => {
     const re =
       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
  };

  return (
    <>
    <div className="form-stuff">
      <form id="form" onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <div className={`input-control ${errors.username && "error"}`}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
          <div className="error">{errors.username}</div>
        </div>
        <div className={`input-control ${errors.email && "error"}`}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <div className="error">{errors.email}</div>
        </div>
        <div className={`input-control ${errors.password && "error"}`}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          <div className="error">{errors.password}</div>
        </div>
        <div className={`input-control ${errors.password2 && "error"}`}>
          <label htmlFor="password2">Password again</label>
          <input
            id="password2"
            name="password2"
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            />
          <div className="error">{errors.password2}</div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
   </div>
    </>
  );
};

export default Signup;
