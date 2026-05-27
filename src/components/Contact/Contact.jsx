import React from 'react';
import './Contact.css';

const Contact = () => {
  const openGmailCompose = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=yashtambade56@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Have a project idea, creative collaboration, or just want to connect? Feel free to reach out anytime.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="contact-card">
          <div className="row g-0">

            {/* Left info panel */}
            <div className="col-lg-5">
              <div className="contact-left">
                <div>
                  <div className="availability-badge">
                    <span className="dot"></span>
                    Available for projects
                  </div>
                  <h3>Let's work<br />together.</h3>
                  <p className="sub">I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.</p>
                </div>

                <div>
                  <div className="contact-info-item">
                    <div className="icon-wrap"><i className="bi bi-geo-alt"></i></div>
                    <div className="text">
                      <h5>Location</h5>
                      <p>Panvel, Maharashtra, India</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon-wrap"><i className="bi bi-envelope"></i></div>
                    <div className="text">
                      <h5>Email</h5>
                      <p><a href="mailto:yashtambade56@gmail.com">yashtambade56@gmail.com</a></p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon-wrap"><i className="bi bi-clock"></i></div>
                    <div className="text">
                      <h5>Response Time</h5>
                      <p>Usually within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="contact-socials">
                    <a href="https://github.com/yashtambade56-ux" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="bi bi-github"></i></a>
                    <a href="https://www.instagram.com/yashhh.710" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/yash-tambade-173508379/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form panel */}
            <div className="col-lg-7">
              <div className="contact-right">
                <h3>Send a Message</h3>
                <p className="sub">Fill out the form below and I'll get back to you as soon as possible.</p>

                <form id="contact-form" onSubmit={openGmailCompose}>
                  <div className="form-row-2">
                    <div className="form-group-custom">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" id="name" className="form-control-custom" placeholder="Yash Tambade" required />
                    </div>
                    <div className="form-group-custom">
                      <label htmlFor="email">Your Email</label>
                      <input type="email" id="email" className="form-control-custom" placeholder="hello@example.com" required />
                    </div>
                  </div>
                  <div className="form-group-custom">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" className="form-control-custom" placeholder="Project collaboration / Just saying hi" required />
                  </div>
                  <div className="form-group-custom">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" className="form-control-custom" rows="6" placeholder="Tell me about your project or idea..." required></textarea>
                  </div>
                  <button type="submit" className="btn-send">
                    <i className="bi bi-send"></i> Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
