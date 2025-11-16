import "./App.css";
import smiley from './assets/web-assets-06.png'
import hand from '/assets/web-assets-05.png'
import peace from '/assets/web-assets-02.png'
import pencil from'./assets/web-assets-04.png'
import arrow from './assets/arrow.png'
import banner from './assets/my-works-tranistion.png'
import proj1 from './assets/project-thumbnail-01.png'
import proj2 from './assets/project-thumbnail-02.png'
import proj3 from './assets/project-thumbnail-03.png'
import proj4 from './assets/project-thumbnail-04.png'
import proj5 from './assets/project-thumbnail-05.png'
import proj6 from './assets/project-thumbnail-06.png'

function App() {
  return (
    <div className="App">
      

      <section id="home" className="home">
        <Navbar />
        <h1>Hello, I’m <i> Salvi </i><img  className="smileyicon" src={smiley} alt="smiley" /></h1>
        <h1><img className="handicon" src={hand} alt="hand" /> & I'm a <img className="peaceicon" src={peace} alt="peace" /></h1>
        <h1 className="jobtitle">Graphic Designer <img className="pencilicon" src={pencil} alt="pencil" /></h1>
       </section>

      <section id="about" className="about">
        <h1 className="abouttitle">ABOUT ME</h1>
        <div className="aboutcontent">
        <div className="aboutleft" >
        <h3>Hey <br /> there!</h3>
        </div>
        <div className="aboutright">
        <p>
          I’m Salvi, a designer who loves exploring ideas and experimenting with <br />
different mediums. I’m passionate about graphic design, always looking <br />
for ways to grow, and I like adding a touch of fun to the work I create.
        </p><br />
        <a href="images/Salvi Jaison_CV_2025.pdf" download className="downloadcv">
        Download CV
        </a><img className="arrow" src={arrow} alt="arrow" />
        </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="skillscontent">
          <div className="skillsbox1"><h3>Visual <br /> Identity</h3></div>
          <div className="skillsbox2"><h3>Package <br /> Design</h3></div>
          <div className="skillsbox3"><h3>Editorial <br />Design</h3></div>
        </div>
        
      </section>

      <section id="blog" className="blog">
      <div className="blogcontainer">
        <h1 className="blogtitle">Blog</h1><br />
        <div className="headshot">
        <img src="src/assets/whoiam.jpeg" alt="" />
        </div>
        <div className="aestheticshot">
        <img src="src/assets/mystyle.jpeg" alt="" />
        </div>
        <div className="passionshot">
        <img src="src/assets/mypassion.jpeg" alt="" />
        </div>
      </div>

      </section>

      <section className="transitionbanner">
        <img src={banner} alt="banner" className="myworkstransition" />
  
</section>

      <section id="projects" className="projects">
        <div className="paragraph"><p>Here’s a peek into my design world. From logos to layouts to packaging, I enjoy <br />
         experimenting with ideas and finding creative ways to make each project stand out.</p></div>
        
        <div className="projectsindividual">
        <div className="proj1">
          <div className="proj1img">
          <img src={proj1} alt="proj1" />
          </div>
          <div className="proj1text">
          <h3>Enev|Branding</h3><a href="https://www.behance.net/gallery/204606575/Enev-Visual-Identity">View More</a>
          </div>
        </div>

        <div className="proj2">
          <div className="proj2img">
          <img src={proj2} alt="proj2" />
          </div>
          <div className="proj2text">
          <h3>Origami|Branding</h3><a href="https://www.behance.net/gallery/197521851/Origami-Brand-identity">View More</a>
          </div>
        </div>

        <div className="proj3">
          <div className="proj3img">
          <img src={proj3} alt="proj3" />
          </div>
          <div className="proj3text">
          <h3>Personal Ptojects</h3><a href="https://www.behance.net/gallery/197323599/Collage-art">View More</a>
          </div>
        </div>

        
<input type="checkbox" id="loadmoreToggle" className="loadmoretoggle" />

        <div className="hiddenprojects">
        <div className="proj4">
          <div className="proj4img">
          <img src={proj4} alt="proj4" />
          </div>
          <div className="proj4text">
          <h3>Chroma|Layout Design</h3><a href="https://www.behance.net/gallery/200519175/Chroma-art-magazine-Layout-design">View More</a>
          </div>
        </div>

        <div className="proj5">
          <div className="proj5img">
          <img src={proj5} alt="proj5" />
          </div>
          <div className="proj5text">
          <h3>Mind Matters|Poster Design</h3><a href="https://www.behance.net/gallery/199962937/Mind-Matters-Poster-Series">View More</a>
          </div>
        </div>

        <div className="proj6">
          <div className="proj6img">
          <img src={proj6} alt="proj6" />
          </div>
          <div className="proj6text">
          <h3>Pickle Pantry|Branding</h3><a href="https://www.behance.net/gallery/194929181/Pickle-Pantry">View More</a>
          </div>
        </div>
        </div>

        <label htmlFor="loadmoreToggle" className="loadmorebtn">Load More</label>
      </div>
      </section>

      <footer id="contact" className="contact">
        <div className="contactcontents">
          <div className="contacttexts">
            <h2>Let's work <br />together</h2> <br />
            <p>M: salvijaison28@gmail.com <br />P: +353 894472265</p>
          </div>
        <div className="contactform">
          <form action="#" method="post" className="contactform">
    <input
    type="text"
    id="name"
    name="name"
    placeholder="Full Name"
    required
  /> <br />

  <input
    type="email"
    id="email"
    name="email"
    placeholder="Email"
    required
  />
   <input
    type="tel"
    id="phone"
    name="phone"
    placeholder="Phone Number" required/> <br />

  <textarea
    id="message" className="message"
    name="message"
    placeholder="Message"
    required
  ></textarea><br />

  
  <button type="submit" className="sendbutton">Send</button>

</form>

        </div>
        </div>
      </footer>
       <div className="customcursor"></div>
    </div>
  
  );
  
}

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navlink">Home</a>
      <a href="#about" className="navlink">About</a>
      <a href="#skills" className="navlink">Skills</a>
      <a href="#projects" className="navlink">Projects</a>
      <a href="#contact" className="navlink">Contact</a>
    </nav>
  );
}

export default App;
