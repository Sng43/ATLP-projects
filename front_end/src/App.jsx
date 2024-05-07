import HomePage from './Components/Dynamic/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import './about.css'
import './work.css'
import './blogs.css'
import './article.css'
import './contact.css'
import './login.css'
import './signup.css'
import Navbar from './Components/Static/Navbar';
import About from './Components/Dynamic/About';
import Work from './Components/Dynamic/Work';
import Blogs from './Components/Dynamic/Blogs'
import Contact from './Components/Dynamic/Contact'
import BlogDetails from './Components/Dynamic/BlogDetails'
import Login from './Components/Dynamic/Login'
import Signup from './Components/Dynamic/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="application">
          <Navbar/>
          <div className="content">
            <Routes>
              <Route path="/login" element = {<Login />}/>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element = {<Work/>}/>
              <Route path="/blogs" element = {<Blogs/>}/>
              <Route path="/blogs/:title" element = {<BlogDetails/>}/>
              <Route path="/contacts" element = {<Contact/>}/>
              <Route path="/signup" element = {<Signup />}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
