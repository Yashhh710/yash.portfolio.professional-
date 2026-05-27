import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Creative developer and designer focused on building immersive digital experiences through modern web development, UI/UX design, and interactive creativity.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Yash Tambade</h4>
              <p><em>Passionate UI/UX Designer & Web Developer with experience in creating modern websites, interactive interfaces, creative projects, and immersive digital experiences.</em></p>
              <ul>
                <li>Panvel, Maharashtra, India</li>
                <li>yashtambade56@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Diploma in Computer Engineering</h4>
              <h5>2025 - Present</h5>
              <p><em>Engineering Student</em></p>
              <p>Learning programming, web development, software design, problem-solving, and modern technologies with a focus on creative digital experiences.</p>
            </div>
            <div className="resume-item">
              <h4>Secondary School Education</h4>
              <h5>Completed</h5>
              <p><em>Maharashtra State Board</em></p>
              <p>Built a strong foundation in mathematics, logical thinking, creativity, and technology while exploring web design and digital art.</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h4>Frontend & Interactive Project Developer</h4>
              <h5>2024 - Present</h5>
              <p><em>Personal & Portfolio Projects</em></p>
              <ul>
                <li>Developed interactive portfolio websites with smooth animations and immersive UI designs.</li>
                <li>Created a map-based portfolio experience with interactive elements and creative navigation.</li>
                <li>Built modern web interfaces inspired by gaming, anime, and cinematic aesthetics.</li>
                <li>Worked on custom Minecraft builds, terrain projects, and open-world creative concepts.</li>
                <li>Designed responsive frontend layouts using HTML, CSS, JavaScript, and React.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Creative Designer & Digital Artist</h4>
              <h5>2023 - Present</h5>
              <p><em>Independent Creative Work</em></p>
              <ul>
                <li>Created anime sketches, digital artwork, and visual concepts.</li>
                <li>Explored photography, visual storytelling, and cinematic compositions.</li>
                <li>Designed interactive interfaces inspired by modern gaming and sci-fi aesthetics.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
