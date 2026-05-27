import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    const scrollTop = document.querySelector('.scroll-top');
    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    };

    const handleScrollToTop = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    if (scrollTop) {
      scrollTop.addEventListener('click', handleScrollToTop);
    }
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    return () => {
      if (scrollTop) {
        scrollTop.removeEventListener('click', handleScrollToTop);
      }
      window.removeEventListener('load', toggleScrollTop);
      document.removeEventListener('scroll', toggleScrollTop);
    };
  }, []);

  return (
    <>
      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <div className="copyright text-center">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">Yash</strong> <span>All Rights Reserved</span></p>
          </div>
        </div>
      </footer>

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer;
