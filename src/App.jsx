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
              <a href="#resume" onClick={() => setIsOpen(false)}>
                <i className="bi bi-file-earmark-text navicon" />
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setIsOpen(false)}>
                <i className="bi bi-images navicon" />
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setIsOpen(false)}>
                <i className="bi bi-hdd-stack navicon" />
                <span>Services</span>
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
        {/* Strenghts and Skills Section */}
        <section id="skills" className="skills section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Strengths and Skills</h2>
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
                {/* Edn Resume Item */}
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
                {/* Edn Resume Item */}
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
                {/* Edn Resume Item */}
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
                {/* Edn Resume Item */}
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
                {/* Edn Resume Item */}
              </div>
            </div>
          </div>
        </section>
        {/* /Resume Section */}
        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
              aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
              quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
              fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div
              className="isotope-layout"
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul
                className="portfolio-filters isotope-filters"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Card</li>
                <li data-filter=".filter-branding">Web</li>
              </ul>
              {/* End Portfolio Filters */}
              <div
                className="row gy-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
                      title="App 1"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Product 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
                      title="Product 1"
                      data-gallery="portfolio-gallery-product"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Branding 1</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
                      title="Branding 1"
                      data-gallery="portfolio-gallery-branding"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
                      title="App 2"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Product 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
                      title="Product 2"
                      data-gallery="portfolio-gallery-product"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Branding 2</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                      title="Branding 2"
                      data-gallery="portfolio-gallery-branding"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                      title="App 3"
                      data-gallery="portfolio-gallery-app"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Product 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                      title="Product 3"
                      data-gallery="portfolio-gallery-product"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <img
                    src="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Branding 3</h4>
                    <p>Lorem ipsum, dolor sit</p>
                    <a
                      href="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                      title="Branding 2"
                      data-gallery="portfolio-gallery-branding"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in" />
                    </a>
                  </div>
                </div>
                {/* End Portfolio Item */}
              </div>
              {/* End Portfolio Container */}
            </div>
          </div>
        </section>
        {/* /Portfolio Section */}
        {/* Services Section */}
        <section id="services" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
              aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
              quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
              fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service-item item-cyan position-relative">
                  <div className="icon">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth={0}
                        fill="#f5f5f5"
                        d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                      />
                    </svg>
                    <i className="bi bi-activity" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Nesciunt Mete</h3>
                  </a>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service-item item-orange position-relative">
                  <div className="icon">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth={0}
                        fill="#f5f5f5"
                        d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                      />
                    </svg>
                    <i className="bi bi-broadcast" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Eosle Commodi</h3>
                  </a>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
                    Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service-item item-teal position-relative">
                  <div className="icon">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth={0}
                        fill="#f5f5f5"
                        d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                      />
                    </svg>
                    <i className="bi bi-easel" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Ledo Markt</h3>
                  </a>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus
                    ea aut. Vel qui id voluptas adipisci eos earum corrupti.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="service-item item-red position-relative">
                  <div className="icon">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth={0}
                        fill="#f5f5f5"
                        d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                      />
                    </svg>
                    <i className="bi bi-bounding-box-circles" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Asperiores Commodit</h3>
                  </a>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <a href="#" className="stretched-link" />
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="service-item item-indigo position-relative">
                  <div className="icon">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth={0}
                        fill="#f5f5f5"
                        d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"
                      />
                    </svg>
                    <i className="bi bi-calendar4-week icon" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Velit Doloremque</h3>
                  </a>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut aut
                    ipsam corporis aut. Sed animi at autem alias eius labore.
                  </p>
                  <a href="#" className="stretched-link" />
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="service-item item-pink position-relative">
                  <div className="icon">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth={0}
                        fill="#f5f5f5"
                        d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"
                      />
                    </svg>
                    <i className="bi bi-chat-square-text" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Dolori Architecto</h3>
                  </a>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque
                    non et debitis iure. Corrupti recusandae ducimus enim.
                  </p>
                  <a href="#" className="stretched-link" />
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* /Services Section */}
        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
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
                    <p>A108 Adam Street, New York, NY 535022</p>
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
                    <p>+1 5589 55488 55</p>
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
                    <p>info@example.com</p>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
              <div className="col-lg-8">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
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
          <h3 className="sitename">Brandon Johnson</h3>
          <p>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi
            fuga maxime saepe commodi placeat.
          </p>
          <div className="social-links d-flex justify-content-center">
            <a href="">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="">
              <i className="bi bi-facebook" />
            </a>
            <a href="">
              <i className="bi bi-instagram" />
            </a>
            <a href="">
              <i className="bi bi-skype" />
            </a>
            <a href="">
              <i className="bi bi-linkedin" />
            </a>
          </div>
          <div className="container">
            <div className="copyright">
              <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Alex Smith</strong>{" "}
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
      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  )
}

export default App
