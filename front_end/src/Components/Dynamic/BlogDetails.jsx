import { useParams } from "react-router-dom";
import useFetch from "../Effects/useFetch";

const BlogDetails = () => {
    const {title} = useParams();
    const { data: blog, loading, error } = useFetch(`http://localhost:7000/blog/` + title);
    return (
      <>
        <div className="in">
          <div className="details">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <div className="container">
                    <h2>{blog.Title}</h2>
                    <div className="image-container">
                        <img src="blog.Image" alt={`${blog.Title}`}></img>
                    </div>
                    <div className="more-info">
                        <p>{blog.Intro}</p>
                        <p>{blog.Body}</p>
                    </div>
                </div>
            )}
          </div>
          <div className="feedback">
            <ul>
              <li>
                <i className="fa-solid fa-heart"></i>
              </li>
              <li>
                <i className="fa-solid fa-comment"></i>
              </li>
              <li>
                <i className="fa-solid fa-paper-plane"></i>
              </li>
            </ul>
            <label htmlFor="email">
              <input type="email" id="email" placeholder="  Comment" />
            </label>
            <button>Comment</button>
          </div>
          <div className="page">
            <ul className="prev">
              <li>
                <a href="#">
                  <p>Previous post</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-arrow-left"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>The Future of Software</h4>
                </a>
              </li>
            </ul>
            <h2>Senga Emmy</h2>
            <ul className="next">
              <li>
                <a href="#">
                  <p>New post</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4>The Future of Software</h4>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}
 
export default BlogDetails;