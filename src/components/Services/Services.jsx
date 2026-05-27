import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Delivering creative digital experiences through modern web development, immersive UI/UX design, interactive concepts, and visually engaging projects.</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="icon flex-shrink-0"><i className="bi bi-code-slash"></i></div>
            <div>
              <h4 className="title"><a href="#services" className="stretched-link">Web Development</a></h4>
              <p className="description">Building responsive, modern, and interactive websites with smooth user experiences.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="icon flex-shrink-0"><i className="bi bi-palette"></i></div>
            <div>
              <h4 className="title"><a href="#services" className="stretched-link">UI/UX Design</a></h4>
              <p className="description">Designing creative interfaces with immersive layouts and modern visual experiences.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="icon flex-shrink-0"><i className="bi bi-controller"></i></div>
            <div>
              <h4 className="title"><a href="#services" className="stretched-link">Game Concepts</a></h4>
              <p className="description">Creating interactive game ideas, open-world concepts, and immersive experiences.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="icon flex-shrink-0"><i className="bi bi-brush"></i></div>
            <div>
              <h4 className="title"><a href="#services" className="stretched-link">Digital Sketching</a></h4>
              <p className="description">Creating anime sketches, concept art, and visual illustrations with creativity.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
            <div className="icon flex-shrink-0"><i className="bi bi-camera"></i></div>
            <div>
              <h4 className="title"><a href="#services" className="stretched-link">Photography</a></h4>
              <p className="description">Capturing landscapes, structures, and cinematic visuals through creative photography.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
            <div className="icon flex-shrink-0"><i className="bi bi-box"></i></div>
            <div>
              <h4 className="title"><a href="#services" className="stretched-link">Creative Projects</a></h4>
              <p className="description">Developing unique digital experiences inspired by gaming, anime, and modern design.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
