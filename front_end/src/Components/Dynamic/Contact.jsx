const Contact = () => {
    return (
      <>
        <div className="in">
          <div className="intro">
            <div className="intro1">
              <h1>Contact me</h1>
            </div>
          </div>
          <p className="brief">
            Feel free to contact me for questions, feedback, or collaboration
            opportunities. Let's create something amazing together!
          </p>
        </div>
        <div className="state">
          <div className="description">
            <h3>Let’s get in touch</h3>
            <p>
              Feel free to contact me for questions, feedback, or collaboration
              opportunities. Let's create something amazing together!
            </p>
            <div className="buttons">
              <button>Instagram</button>
              <button>GitHub</button>
              <button>Discord</button>
            </div>
          </div>
          <div className="container">
            <form id="form" action="index.html">
              <div className="input-control">
                <label htmlFor="nam"></label>
                <input id="nam" name="nam" type="text" placeholder="Name" />
                <div className="error"></div>
              </div>
              <div className="input-control">
                <label htmlFor="email"></label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                />
                <div className="error"></div>
              </div>
              <div className="input-control">
                <label htmlFor="description"></label>
                <textarea
                  name="project"
                  id="description"
                  cols="30"
                  rows="10"
                  placeholder="Project Description"
                ></textarea>
                <div className="error"></div>
              </div>
              <button type="submit">Submit</button>
            </form>
            <script src="contact.js"></script>
          </div>
        </div>
        <div className="in">
          <div className="inSkills">
            <div className="skills">
              <h4>A junior fullstack Software Engineer</h4>
              <h5>Familiar with languages like (skilled):</h5>
              <ul>
                <li>Python</li>
                <li>Bash script</li>
                <li>HTML, CSS, JavaScript</li>
              </ul>
            </div>
          </div>
          <div className="proj">
            <h2 className="projects">A limited showcase of my projects</h2>
            <span></span>
            <button>more projects</button>
          </div>
          <ul className="portfolio">
            <li>
              <div className="box">
                <div className="imageHold">
                  <img src="" alt="project 1" />
                </div>
                <h6>Project 1</h6>
                <p>more about project</p>
              </div>
              <div className="box">
                <div className="imageHold">
                  <img src="" alt="project 1" />
                </div>
                <h6>Project 2</h6>
                <p>more about project</p>
              </div>
            </li>
            <li>
              <div className="box">
                <div className="imageHold">
                  <img src="" alt="project 1" />
                </div>
                <h6>Project 3</h6>
                <p>more about project</p>
              </div>
              <div className="box">
                <div className="imageHold">
                  <img src="" alt="project 1" />
                </div>
                <h6>Project 4</h6>
                <p>more about project</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="in">
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
      </>
    );
}
 
export default Contact;