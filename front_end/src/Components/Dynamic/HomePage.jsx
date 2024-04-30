const HomePage = () => {
  return (
    <>
      <div className="in">
        <div className="intro">
          <div className="intro1">
            <h1>I'm Senga, a junior full stack</h1>
          </div>
          <div className="intro2">
            <div>
              <img src="DSC_0994.JPG" alt="profile picture" />
            </div>
            <h1>developer currently at</h1>
          </div>
          <div className="intro3">
            <h1>an entry level</h1>
          </div>
        </div>
        <p className="brief">
          Adapted to any sort of technology, but more comfortable with languages
          such as HTML, CSS, Javascript and python.
        </p>
        <div className="moreInfo">
          <button className="more">
            <a href="about.html">more</a>
          </button>
          <ul>
            <li>
              <button>Instagram</button>
            </li>
            <li>
              <button>Linked In</button>
            </li>
            <li>
              <button>Discord</button>
            </li>
          </ul>
        </div>
        <div className="proj">
          <h2 className="projects">A limited showcase of my projects</h2>
          <span></span>
          <button>
            <a href="work.html">more projects</a>
          </button>
        </div>
        <ul className="portfolio">
          <li>
            <div className="box">
              <div className="imageHold">
                <img src="Screenshot 2024-02-20 084055.png" alt="project 1" />
              </div>
              <h6>Bash Script</h6>
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
      <div className="profile">
        <div className="description">
          <h3>I'm known as a fullstack Software Engineer</h3>
          <p> Adapted to most sort of technology, but more comfortable with
            languages such as HTML, CSS, Javascript</p>
          <button><a href="about.html">About me</a></button>
        </div>
        <div className="image">
          <img src="DSC_0994.JPG" alt="" />
        </div>
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
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="work.html">Work</a></li>
              <li><a href="contacts.html">Contact</a></li>
            </ul>
          </div>
          <div className="socialIcons">
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
