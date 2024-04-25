const About = () => {
    return (
      <>
        <div className="in">
          <div className="intro">
            <div className="intro1">
              <h1>About me</h1>
            </div>
          </div>
          <p className="brief">
            Explore my life and work style, my methodology, experience, and
            vision. You can get to know more about me including my hobbies and
            vision.
          </p>
        </div>
        <div className="pic">
          <div className="thePic">
            <img src="DSC_0994.JPG" alt="profile pic" />
          </div>
          <div className="found">
            <p>Names: SENGA Emmanuel</p>
            <p>Phone: +250791276393</p>
            <p>Email: daemmyoff1cial@gmail.com</p>
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
          <div className="hobby">
            <h3>
              When I’m away from the computer, you’ll often find me attempting
              to read a self-help book or playing a guitar
            </h3>
            <div className="hobbies">
              <div className="hobb">
                <img src="code.jpg" alt="" />
              </div>
              <div className="hobb">
                <img src="images (2).jpg" alt="" />
              </div>
              <div className="hobb">
                <img src="WhatsApp Image 2024-03-11 at 15.04.37.jpeg" alt="" />
              </div>
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
            <a href="contacts.html">
              <div className="contacts">
                <h3>Interested in working with me?</h3>
                <p>contact me &gt;</p>
              </div>
            </a>
          </div>
          <div className="footerContainer">
            <h2>Senga Emmy</h2>
            <div className="BottomNav">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="work.html">Work</a>
                </li>
                <li>
                  <a href="contacts.html">Contact</a>
                </li>
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
 
export default About;