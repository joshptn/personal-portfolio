import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // only animate once
    });
  }, []);

    const [isOpen, setIsOpen] = useState(false);

  const toggleHeader = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
  const skillSection = document.querySelector(".skills-animation");
  const progressBars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBars.forEach((bar) => {
            const value = bar.getAttribute("aria-valuenow");
            bar.style.width = value + "%";
          });
        }
      });
    },
    { threshold: 0.5 } // triggers when 50% of section is visible
  );

  if (skillSection) observer.observe(skillSection);

  return () => {
    if (skillSection) observer.unobserve(skillSection);
  };
}, []);


  return (
    <>
      {/* Header Section */}
      <header
        id="header"
        className={`header d-flex flex-column justify-content-center ${
          isOpen ? "header-show" : ""
        }`}
      >
        <i
          className={`header-toggle d-xl-none bi ${
            isOpen ? "bi-x" : "bi-list"
          }`}
          onClick={toggleHeader}
        ></i>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active" onClick={() => setIsOpen(false)}>
                <i className="bi bi-house navicon" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                <i className="bi bi-person navicon" />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsOpen(false)}>
                <i className="bi bi-award navicon" />
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#resume" onClick={() => setIsOpen(false)}>
                <i className="bi bi-file-earmark-text navicon" />
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setIsOpen(false)}>
                <i className="bi bi-folder" />
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#tech stack" onClick={() => setIsOpen(false)}>
                <i className="bi bi-layers" />
                <span>Tech Stack </span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <i className="bi bi-envelope navicon" />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section light-background">
          <img src="assets/img/hero-bg.jfif" alt="" />
          <div className="container" data-aos="zoom-out">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <h2>Joshua Pateña</h2>
                <p>
                  Aspiring Cloud Developer
                </p>
                <div className="social-links">
                  <a href="https://x.com/juswant2beyours">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="https://www.facebook.com/juswanabeyours">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="https://www.instagram.com/joshptn">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="https://www.linkedin.com/in/joshua-patenia-714727346">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Hero Section */}
        {/* About Section */}
        <section id="about" className="about section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>
              My name is <span style={{fontWeight: "bold", fontSize: "1.3rem", color: "#4d5255ff" }}> Joshua Pateña </span> — 
              an aspiring Cloud Developer driven by curiosity and a love for building systems that can handle demand gracefully.<br/> <hr/> 
              My passion lies in building smart systems, sparking innovation, and helping businesses 
              grow with tech-driven solutions. I blend a business-minded approach with a high-value mindset, 
              because technology isn’t just about lines of code, it’s about creating real-world impact.
              Whether it’s architecting in the cloud, streamlining processes, or turning bold ideas into reality, 
              I’m here to make it happen.
            </p>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <img
                  src="assets/img/profile-img.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-8 content">
                <h2>Aspiring Cloud Developer</h2>
                <p className="fst-italic py-3">
                  I am the kind of programmer who don't code… I architect solutions.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Birthday:</strong> <span>12 September 2003</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Hobby:</strong> <span>Cycling</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Phone:</strong> <span>+63 935 636 3607</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                        <span>Apalit, Pampanga</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" /> <strong>Status:</strong>{" "}
                        <span>ACT Student / Graduate / Ongoing Learner</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Degree:</strong> <span>Associate</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Email:</strong> <span>jashuapatenia15@gmail.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Interest:</strong> <span>AI • Automation • Cloud Infrastructure</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="py-3">
                  “Anyone can build an app. 
                  But building one that scales, adapts, and thrives in the cloud — 
                  that’s where innovation begins.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="skills section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <p className="fst-italic py-3">
              “Driven by curiosity, powered by creativity, defined by impact.”
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row skills-content skills-animation">
              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    <span>Web Development </span> <i className="val">85%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    <span>UI/UX Awareness</span> <i className="val">82%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="82"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    <span>Front-End Creativity</span> <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    <span>Problem Solving & Debugging</span> <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    <span>Publing Speaking & Delivery</span> <i className="val">88%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    <span>Teamwork & Collaboration</span> <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    <span>Curiosity & Willingness to Learn</span> <i className="val">95%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    <span>Perseverance & Discipline</span> <i className="val">98%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="98"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Strengths and Skills Section */}
        {/* Resume Section */}
        <section id="resume" className="resume section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
            <p>
              I’m an aspiring Cloud Developer who believes every experience builds a stronger foundation. 
              From hands-on work in service and engineering environments, 
              I’ve developed perseverance, teamwork, and adaptability.
               Explore my resume to see how dedication and growth shape my path in technology.
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="resume-title">Sumary</h3>
                <div className="resume-item pb-0">
                  <h4>Joshua Pateña</h4>
                  <p>
                    <em>
                      I hold an Associate Degree in Computer Technology and am currently pursuing my Bachelor’s in Information Systems. 
                      My passion lies in building smart systems, sparking innovation, and helping businesses grow with tech-driven solutions. 
                      I blend a business-minded approach with a high-value mindset, 
                      because technology isn’t just about lines of code, it’s about creating real-world impact.
                    </em>
                  </p>
                  <ul>
                    <li>Apalit, Pampanga</li>
                    <li> +63 935 636 3607</li>
                    <li>jashuapatenia15@gmail.com</li>
                  </ul>
                </div>
                {/* End Resume Item */}
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Bachelor of Science in Information Systems</h4>
                  <h5>2025 - Present</h5>
                  <p>
                    <em>La Verdad Christian College, Apalit, Pampanga</em>
                  </p>
                  <p>
                    Currently in junior year, developing advanced knowledge in systems analysis, 
                    programming, and business technology integration.
                    Focused on applying technology to solve real-world problems 
                    and pursuing growth as an Aspiring Cloud Developer.
                  </p>
                </div>
                {/* End Resume Item */}
                <div className="resume-item">
                  <h4>Associate in Computer technology</h4>
                  <h5>2023 - 2025</h5>
                  <p>
                    <em>La Verdad Christian College, Apalit, Pampanga</em>
                  </p>
                  <p>
                    Built a strong foundation in web development, networking, and computer systems. 
                    Gained hands-on experience in technical support, programming, and system troubleshooting, 
                    fostering adaptability and critical thinking in IT environments.
                  </p>
                </div>
                {/* End Resume Item */}
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Service Crew</h4>
                  <h5>July 2025 - Present</h5>
                  <p>
                    <em>BES House of Chicken, Apalit Pampanga </em>
                  </p>
                  <ul>
                    <li>
                      Delivered quality service in a fast-paced environment,
                       demonstrating teamwork, adaptability, and strong communication.
                    </li>
                    <li>
                      Managed multiple tasks efficiently, maintaining focus and composure under pressure.
                    </li>
                    <li>
                      Developed a sense of discipline and responsibility, qualities t
                      hat translate into effective collaboration and reliability in professional settings.
                    </li>
                  </ul>
                </div>
                {/* End Resume Item */}
                <div className="resume-item">
                  <h4>Hollow Block Maker</h4>
                  <h5>October - December 2024</h5>
                  <p>
                    <em>MCGI Engineering Department, Apalit, Pampanga</em>
                  </p>
                  <ul>
                    <li>
                      Performed physically demanding tasks with perseverance 
                      and attention to detail, ensuring accuracy and consistency in production.
                    </li>
                    <li>
                      Gained experience working in a structured and 
                      goal-oriented environment, strengthening problem-solving and time management skills.
                    </li>
                    <li>
                      Learned the value of hard work and persistence, 
                      raits that support growth in technical and development-focused careers.
                    </li>
                  </ul>
                </div>
                <br/>
                <div>
                  <span>
                    <em>
                        Feel free to download my resume to explore my full experience and skills 
                        and learn more about my journey and what I can bring to your team.
                    </em>
                    <br/>
                    <br/>
                    <a
                      href="./RESUME.pdf"
                      download="Joshua-Pateña-Resume.pdf"
                      className="download-btn"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <i className="bi bi-download"></i> Download Resume
                    </a>
                  </span>
                </div>
                {/* End Resume Item */}
              </div>
            </div>
          </div>
        </section>
        {/* Resume Section */}
        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>
              Here are some of my featured projects that reflect my skills in design and development.
              <br/> Each project reflects my creativity, technical skill, and drive to build meaningful digital experiences.
            </p>
          </div>

          <div className="container">
            <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
              
              {/* Portfolio Item 1 */}
              <div className="col-lg-6 col-md-6 portfolio-item">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/masonry-portfolio/LVCIS.png"
                    className="img-fluid"
                    alt="LV CIS"
                  />
                  <div className="portfolio-info">
                    <h4>LV CIS</h4>
                    <p>
                      Club Integrated System for managing attendance, events, and memberships.
                    </p>
                    <br/>
                    <div className="tech-stack">
                      <span>Laravel</span>
                      <span>React</span>
                      <span>TailwindCSS</span>
                      <span>XAMPP</span>
                      <span>MySQL</span>
                      <span>ShadcnUI</span>
                    </div>
                    <a
                      href="https://github.com/rshdgvn/LV-CIS.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-link"
                    >
                      <i className="bi bi-github"></i> Repository
                    </a>
                    <a
                      href="assets/img/masonry-portfolio/LVCIS.png"
                      title="LV CIS"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Portfolio Item 2 */}
              <div className="col-lg-6 col-md-6 portfolio-item">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/masonry-portfolio/app-dates.png"
                    className="img-fluid"
                    alt="AppDates"
                  />
                  <div className="portfolio-info">
                    <h4>AppDates</h4>
                    <p>
                      A project scheduling and tracking tool with smart Kanban-style management.
                    </p>
                    <br/>
                    <div className="tech-stack">
                      <span>Laravel</span>
                      <span>Blade</span>
                      <span>TailwindCSS</span>
                      <span>XAMPP</span>
                      <span>MySQL</span>
                    </div>
                    <a
                      href="https://github.com/rshdgvn/app-dates.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-link"
                    >
                      <i className="bi bi-github"></i> Repository
                    </a>
                    <a
                      href="assets/img/masonry-portfolio/app-dates.png"
                      title="AppDates"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Portfolio Item 3 */}
              <div className="col-lg-6 col-md-6 portfolio-item">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/masonry-portfolio/cycling-website.png"
                    className="img-fluid"
                    alt="Cycling Website"
                  />
                  <div className="portfolio-info">
                    <h4>Cycling Website</h4>
                    <p>
                      This is where I share my passion for cycling and the places and famous destination I have been.
                    </p>
                    <br/>
                    <div className="tech-stack">
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JavaScript</span>
                    </div>
                    <a
                      href="https://github.com/joshptn/MyPersonalCyclingWebsite-.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-link"
                    >
                      <i className="bi bi-github"></i> Repository
                    </a>
                    <a
                      href="assets/img/masonry-portfolio/cycling-website.png"
                      title="Cycling Website"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Portfolio Item 4 */}
              <div className="col-lg-6 col-md-6 portfolio-item">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/masonry-portfolio/note-app.png"
                    className="img-fluid"
                    alt="Note App"
                  />
                  <div className="portfolio-info">
                    <h4>Note App</h4>
                    <p>
                      A simple CRUD-based note management app designed for productivity.
                    </p>
                    <br/>
                    <div className="tech-stack">
                      <span>PHP</span>
                      <span>Laravel</span>
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JavaScript</span>
                      <span>XAMPP</span>
                      <span>MySQL</span>
                    </div>
                    <a
                      href="https://github.com/joshptn/service-class.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo-link"
                    >
                      <i className="bi bi-github"></i> Repository
                    </a>
                    <a
                      href="assets/img/masonry-portfolio/note-app.png"
                      title="Note App"
                      data-gallery="portfolio-gallery"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* /Portfolio Section */}
        {/* Tech Stack / Skills Section */}
        <section id="tech stack" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Tech Stack</h2>
            <p>These are the tools and technologies I am proficient in for building projects efficiently.</p>
          </div>

          <div className="container">
            <div className="row gy-4 justify-content-center">
              {/* Python */}
              <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay={100}>
                <div><h3>Python</h3></div>
                <div className="tech-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                  <div className="tech-info">
                    <h3>Python</h3>
                    <p>Versatile scripting and backend development language.</p>
                  </div>
                </div>
              </div>

              {/* PHP */}
              <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay={200}>
                <div><h3>PHP</h3></div>
                <div className="tech-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                  <div className="tech-info">
                    <h3>PHP</h3>
                    <p>Server-side scripting for dynamic web applications.</p>
                  </div>
                </div>
              </div>

              {/* Laravel */}
              <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay={300}>
                <div><h3>Laravel</h3></div>
                <div className="tech-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" />
                  <div className="tech-info">
                    <h3>Laravel</h3>
                    <p>Robust PHP framework for scalable web applications.</p>
                  </div>
                </div>
              </div>

              {/* HTML */}
              <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay={400}>
                <div><h3>HTML</h3></div>
                <div className="tech-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                  <div className="tech-info">
                    <h3>HTML</h3>
                    <p>Structure and semantic foundation for web pages.</p>
                  </div>
                </div>
              </div>

              {/* CSS */}
              <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay={500}>
                <div><h3>CSS</h3></div>
                <div className="tech-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                  <div className="tech-info">
                    <h3>CSS</h3>
                    <p>Styling and animations to bring designs to life.</p>
                  </div>
                </div>
              </div>

              {/* React */}
              <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay={600}>
                <div><h3>React</h3></div>
                <div className="tech-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  <div className="tech-info">
                    <h3>React</h3>
                    <p>Modern library for building dynamic UIs.</p>
                  </div>
                </div>
              </div>

              {/* Tailwind */}
              <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay={700}>
                <div><h3>Tailwind</h3></div>
                <div className="tech-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="Tailwind CSS" />
                  <div className="tech-info">
                    <h3>Tailwind</h3>
                    <p>Utility-first framework for fast, responsive designs.</p>
                  </div>
                </div>
              </div>

              {/* Figma */}
              <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay={800}>
                <div><h3>Figma</h3></div>
                <div className="tech-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                  <div className="tech-info">
                    <h3>Figma</h3>
                    <p>Design and prototyping tool for UI/UX projects.</p>
                  </div>
                </div>
              </div>

              {/* Git */}
              <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay={900}>
                <div><h3>Git</h3></div>
                <div className="tech-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                  <div className="tech-info">
                    <h3>Git</h3>
                    <p>Version control system for managing code efficiently.</p>
                  </div>
                </div>
              </div>

              {/* MySQL */}
              <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay={1000}>
                <div><h3>MySQL</h3></div>
                <div className="tech-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                  <div className="tech-info">
                    <h3>MySQL</h3>
                    <p>Relational database system for structured data storage.</p>
                  </div>
                </div>
              </div>

              {/* C# */}
              <div className="col-lg-2 col-md-4 col-6" data-aos="fade-up" data-aos-delay={1100}>
                <div><h3>C#</h3></div>
                <div className="tech-card">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
                  <div className="tech-info">
                    <h3>C#</h3>
                    <p>Programming language for desktop, backend, and game development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Tech Stack Section */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Get in Touch</h2>
          </div>
          {/* End Section Title */}
          <div className="container" data-aos="fade" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-4">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h3>Address</h3>
                    <p>San Vicente, Apalit, Pampanga</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <i className="bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>Call Us</h3>
                    <p>+63 935 636 3607</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h3>Email Us</h3>
                    <p>jashuapatenia15@gmail.com</p>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
              <div className="col-lg-8">
                <form
                  action="https://formspree.io/f/movkywyz"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <label className="title-name">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 ">
                      <label className="title-name">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="title-name">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="title-name">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
        {/* /Contact Section */}
      </main>
      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <div className="social-links d-flex justify-content-center">
            <a href="https://x.com/juswant2beyours">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="https://www.facebook.com/juswanabeyours">
              <i className="bi bi-facebook" />
            </a>
            <a href="https://www.instagram.com/joshptn">
              <i className="bi bi-instagram" />
            </a>
            <a href="https://www.linkedin.com/in/joshua-patenia-714727346">
              <i className="bi bi-linkedin" />
            </a>
          </div>
          <div className="container">
            <div className="copyright">
              <span>&copy;</span>{""}
              <strong className="px-1 sitename"> 2025 ./joshptn.</strong>{""}
              <span>All Rights Reserved</span>
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you've purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
              Distribuited by <a href="https://themewagon.com">ThemeWagon</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
