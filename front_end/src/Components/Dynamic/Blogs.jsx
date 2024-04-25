import useFetch from "../Effects/useFetch";

const Blogs = () => {
  const {
    data: blogs,
    loading,
    error
  } = useFetch(`http://localhost:7000/blogs`);
    return (
      <>
        <div className="in">
          <div className="intro">
            <div className="intro1">
              <h1>Discover more</h1>
            </div>
          </div>
          <button className="add">
            <a href="login.html">Add article +</a>
          </button>
          <div className="blogs">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {blogs && blogs.map((blog) => (
              <div className="blog-preview" key = {blog.id}>
                <div className="blog-image"><img src={blog.Image} alt={blog.Title} /></div>
                <h3>{blog.Title}</h3>
                <p>{blog.Intro}</p>
              </div>
            ))}
          </div>
          <div className="contactHolder">
            <div className="contacts">
              <h3>Interested in working with me?</h3>
              <p>contact me &gt;</p>
            </div>
          </div>
          <div className="footerContainer">
            <h4>Senga Emmy</h4>
            <div className="BottomNav">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="socialIcons">
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <script src="blogs.js"></script>
      </>
    );
}
 
export default Blogs;