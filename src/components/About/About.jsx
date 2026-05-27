import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    // Initialize PureCounter on load / mount
    if (window.PureCounter) {
      new window.PureCounter();
    }

    // Initialize waypoints for skills progress animation
    if (window.Waypoint) {
      const skillsAnimation = document.querySelectorAll('.skills-animation');
      skillsAnimation.forEach((item) => {
        new window.Waypoint({
          element: item,
          offset: '80%',
          handler: function(direction) {
            const progress = item.querySelectorAll('.progress .progress-bar');
            progress.forEach(el => {
              el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
          }
        });
      });
    }
  }, []);

  return (
    <>
      {/* About Section */}
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>I'm a passionate designer and developer focused on creating intuitive, engaging digital experiences. With expertise in frontend development, UI/UX design, and creative problem-solving, I transform ideas into interactive solutions.</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="assets/img/my-profile-img2.png" className="img-fluid" alt="Yash Portrait" />
            </div>
            <div className="col-lg-8 content">
              <h2>Designer &amp; Developer</h2>
              <p className="fst-italic py-3">
                I combine creativity with technical expertise to build beautiful and functional digital products. My passion lies in creating seamless user experiences and writing clean, efficient code.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Location:</strong> <span>Panvel, Maharashtra</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>DOB:</strong> <span>19 May 2008</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>yashtambade@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Role:</strong> <span>UI/UX Designer & Web Developer</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Currently Studying B.Tech-CSE</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Hobby:</strong> <span>Sketching</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Goal:</strong> <span>Collaborate on innovative projects</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Interests:</strong> <span>Gaming, Sketching & Photography</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                I love transforming complex problems into elegant, user-friendly solutions. Whether it's building responsive web applications, designing intuitive interfaces, or creating engaging interactive experiences, I'm committed to delivering high-quality work that makes an impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-emoji-smile"></i>
                <div className="stat-number-wrap">
                  <span data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1" className="purecounter">25</span><span className="stat-suffix">+</span>
                </div>
                <p><strong>Projects Completed</strong> <span>Turning creative ideas into real digital experiences.</span></p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-code-slash"></i>
                <div className="stat-number-wrap">
                  <span data-purecounter-start="0" data-purecounter-end="100" data-purecounter-duration="1" className="purecounter">100</span><span className="stat-suffix">k+</span>
                </div>
                <p><strong>Lines of Code</strong> <span>Crafting structured, optimized, and functional logic.</span></p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-git"></i>
                <div className="stat-number-wrap">
                  <span data-purecounter-start="0" data-purecounter-end="450" data-purecounter-duration="1" className="purecounter">450</span><span className="stat-suffix">+</span>
                </div>
                <p><strong>Git Commits</strong> <span>Maintaining consistent codebase updates and tracking progress.</span></p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className="bi bi-stopwatch"></i>
                <div className="stat-number-wrap">
                  <span data-purecounter-start="0" data-purecounter-end="1200" data-purecounter-duration="1" className="purecounter">1200</span><span className="stat-suffix">+</span>
                </div>
                <p><strong>Hours Coding</strong> <span>Dedicated to mastering design systems and frontend architecture.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>Passionate about creating interactive experiences through design, development, and creativity.</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"><span>HTML</span> <i className="val">95%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>JavaScript</span> <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>React</span> <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill"><span>UI/UX Design</span> <i className="val">88%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Game Development</span> <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Photography</span> <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill"><span>Sketching</span> <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
