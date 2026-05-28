import React, { useEffect } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  useEffect(() => {
    const navmenulinks = document.querySelectorAll('.navmenu a');

    function navmenuScrollspy() {
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        const section = document.querySelector(navmenulink.hash);
        if (!section) return;
        const position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        }
      });
    }

    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);
    navmenuScrollspy(); // run once on mount

    return () => {
      window.removeEventListener('load', navmenuScrollspy);
      document.removeEventListener('scroll', navmenuScrollspy);
    };
  }, []);

  const closeSidebar = () => {
    const header = document.getElementById('header');
    const toggleBtn = document.querySelector('.header-toggle');
    if (header && header.classList.contains('header-show')) {
      header.classList.remove('header-show');
      if (toggleBtn) {
        toggleBtn.classList.add('bi-list');
        toggleBtn.classList.remove('bi-x');
      }
    }
  };

  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <div className="profile-img">
        <img src="assets/img/my-profile-img1.png" alt="Yash Profile" className="img-fluid rounded-circle" />
      </div>

      <a href="#hero" className="logo d-flex align-items-center justify-content-center" onClick={closeSidebar}>
        <h1 className="sitename">Yash Tambade</h1>
      </a>

      <div className="social-links text-center">
        <a href="https://github.com/yashtambade56-ux" target="_blank" rel="noopener noreferrer" className="facebook"><i className="bi bi-github"></i></a>
        <a href="https://www.instagram.com/yashhh.710" target="_blank" rel="noopener noreferrer" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/in/yash-tambade-173508379" target="_blank" rel="noopener noreferrer" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero" onClick={closeSidebar}><i className="bi bi-house navicon"></i>Home</a></li>
          <li><a href="#about" onClick={closeSidebar}><i className="bi bi-person navicon"></i> About</a></li>
          <li><a href="#resume" onClick={closeSidebar}><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
          <li><a href="#portfolio" onClick={closeSidebar}><i className="bi bi-images navicon"></i> Project</a></li>
          <li><a href="#services" onClick={closeSidebar}><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
          <li><a href="#contact" onClick={closeSidebar}><i className="bi bi-envelope navicon"></i> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Sidebar;
