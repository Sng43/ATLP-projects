import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:7000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data && data._id) {
          window.location.assign("Admin-dash.html");
        } else {
          setError("Invalid email or password");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    return ( 
         <>
         <div className="form-stuff">

            <header className="Nav">
               <h2><a href="index.html">Senga Emmy</a></h2>
           </header>
           <div className="contain">
               <div className="log">
                   <h2>Login to Your Account</h2>
                   <form id="loginForm" onSubmit={handleLogin}>
                       <label htmlFor="email"><input type="email"
                        id="email"
                         placeholder="Email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         /></label>
                       <label htmlFor="password"><input type="password"
                        id="password" 
                        placeholder="Password"
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                        /></label>
                       <a href="#">forgot password?</a>
                       <button type="submit" id="login">Login</button>
                       {error && <p>{error}</p>}
                   </form>
               </div>
               <div className="sign">
                   <h2>New Here?</h2>
                   <button> <Link to="/signup">Sign Up</Link> </button>
               </div>
           </div>
        </div>
        </>
     );
}
 
export default Login;