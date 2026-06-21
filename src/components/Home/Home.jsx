import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (window.Typed && typedRef.current) {
      const typed = new window.Typed(typedRef.current, {
        strings: ["Designer_", "Frontend Developer_", "Artist_", "Photographer_"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src="assets/img/71f822bb-13e5-40cd-ad0f-15e701300cc8.png" alt="Hero Background" data-aos="fade-in" />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Yash Tambade</h2>
        <p>I'm <span ref={typedRef} className="typed" data-typed-items="Designer_, Frontend Developer_, Artist_, Photographer_">Designer_</span></p>
      </div>
    </section>
  );
};

export default Home;
