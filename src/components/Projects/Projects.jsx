import React, { useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    // Initialize GLightbox
    if (window.GLightbox) {
      window.GLightbox({
        selector: '.glightbox'
      });
    }

    if (window.imagesLoaded && window.Isotope) {
      const isotopeLayouts = document.querySelectorAll('.isotope-layout');
      isotopeLayouts.forEach(function(isotopeItem) {
        const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

        let initIsotope;
        window.imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
          initIsotope = new window.Isotope(isotopeItem.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
          });
        });

        const filterItems = isotopeItem.querySelectorAll('.isotope-filters li');
        filterItems.forEach(function(filterEl) {
          filterEl.addEventListener('click', function() {
            const activeFilter = isotopeItem.querySelector('.isotope-filters .filter-active');
            if (activeFilter) activeFilter.classList.remove('filter-active');
            this.classList.add('filter-active');
            if (initIsotope) {
              initIsotope.arrange({
                filter: this.getAttribute('data-filter')
              });
            }
            if (window.AOS) {
              window.AOS.refresh();
            }
          }, false);
        });
      });
    }
  }, []);

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>A collection of creative and interactive projects focused on web development, UI/UX design, gaming concepts, and immersive digital experiences. Each project reflects creativity, problem-solving, and passion for modern design and technology.</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">Web Apps</li>
            <li data-filter=".filter-product">Games</li>
            <li data-filter=".filter-branding">Tools</li>
            <li data-filter=".filter-portfolios">Portfolios</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {/* projects */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-portfolios">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/projects.png"
                  alt="project screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#667eea,#764ba2)', color: '#fff' }}>My Projects</div>
                <div className="portfolio-info">
                  <h4>My Projects</h4>
                  <p>Project showcase web</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/yashtambade56-ux/My-Projects" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://myprojects-yash.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mac */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-portfolios">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/mac.png"
                  alt="Mac project screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#667eea,#764ba2)', color: '#fff' }}>Mac</div>
                <div className="portfolio-info">
                  <h4>Mac</h4>
                  <p>Modern web application showcase</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/Mac" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://mac-lyart.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Needle Noise */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/N&N.png"
                  alt="Needle Noise screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#f093fb,#f5576c)', color: '#fff' }}>Needle Noise</div>
                <div className="portfolio-info">
                  <h4>Needle Noise</h4>
                  <p>Audio visualization and music experience</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/Needle-Noise" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://yashhh710.github.io/Needle-Noise/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Dev Flashcards */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/DevCards.png"
                  alt="Dev Flashcards screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#4facfe,#00f2fe)', color: '#fff' }}>Dev Flashcards</div>
                <div className="portfolio-info">
                  <h4>Dev Flashcards</h4>
                  <p>Interactive learning tool for developers</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/Dev-flash-cards" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://dev-flash-cards-phi.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* AxonPrompt */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/promt.png"
                  alt="AxonPrompt screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#fa709a,#fee140)', color: '#fff' }}>AxonPrompt</div>
                <div className="portfolio-info">
                  <h4>AxonPrompt</h4>
                  <p>AI-powered prompt generation platform</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/AxonPrompt" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://axon-prompt.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio v4 */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-portfolios">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/port-v4.png"
                  alt="Portfolio v4 screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#30cfd0,#330867)', color: '#fff' }}>Portfolio v4</div>
                <div className="portfolio-info">
                  <h4>Portfolio v4</h4>
                  <p>Personal portfolio website showcase</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/Portfolio-v4" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://portfolio-v4-three-mauve.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* ATMOS Weather */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/atmos.png"
                  alt="ATMOS Weather screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#a8edea,#fed6e3)', color: '#333' }}>ATMOS Weather</div>
                <div className="portfolio-info">
                  <h4>ATMOS Weather</h4>
                  <p>Real-time weather information app</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/ATMOS-WEATHER-WEB" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://yashhh710.github.io/ATMOS-WEATHER-WEB/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* How I Build Webs */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/hbcw.png"
                  alt="How I Build Webs screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#ff9a56,#ff6a88)', color: '#fff' }}>How I Build Webs</div>
                <div className="portfolio-info">
                  <h4>How I Build Webs</h4>
                  <p>Web development tutorial and guide</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/How-I-Build-Webs" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://yashhh710.github.io/How-I-Build-Webs/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Axon AI */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/Axon.png"
                  alt="Axon AI screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#43e97b,#38f9d7)', color: '#333' }}>Axon AI</div>
                <div className="portfolio-info">
                  <h4>Axon AI</h4>
                  <p>Artificial intelligence chat platform</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/axon-ai" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://axon-ai-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* GTA-6 */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/gta6.png"
                  alt="GTA-6 screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#fa7e1e,#d63031)', color: '#fff' }}>GTA-6</div>
                <div className="portfolio-info">
                  <h4>GTA-6</h4>
                  <p>Interactive gaming experience</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/gta-6" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://yashhh710.github.io/gta-6/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* FoodieExpress */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/Foodie.png"
                  alt="FoodieExpress screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#ffa751,#ffe259)', color: '#fff' }}>FoodieExpress</div>
                <div className="portfolio-info">
                  <h4>FoodieExpress</h4>
                  <p>Food delivery application platform</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/FoodieExpress" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://foodie-express-ten-topaz.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Reaction Speed Test */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/speed.png"
                  alt="Reaction Speed Test screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#667eea,#764ba2)', color: '#fff' }}>Reaction Speed</div>
                <div className="portfolio-info">
                  <h4>Reaction Speed Test</h4>
                  <p>Interactive speed testing game</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/reaction-speed-test" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://yashhh710.github.io/reaction-speed-test/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tic Tac Toe */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/ox.png"
                  alt="Tic Tac Toe screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#f093fb,#f5576c)', color: '#fff' }}>Tic Tac Toe</div>
                <div className="portfolio-info">
                  <h4>Tic Tac Toe Game</h4>
                  <p>Classic board game implementation</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/tic-tac-toe-html-css" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://yashhh710.github.io/tic-tac-toe-html-css/index.html" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio v1 */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-portfolios">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/port-v1.png"
                  alt="Portfolio v1 screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#4facfe,#00f2fe)', color: '#fff' }}>Portfolio v1</div>
                <div className="portfolio-info">
                  <h4>Portfolio v1</h4>
                  <p>Original portfolio design showcase</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/Portfolio_v1" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://yashhh710.github.io/Portfolio_v1/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Axon EV */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/axon-ev.png"
                  alt="Axon EV screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#30cfd0,#330867)', color: '#fff' }}>Axon EV</div>
                <div className="portfolio-info">
                  <h4>Axon EV Project</h4>
                  <p>Electric vehicle showcase website</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/axon-ev-project" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://axonev.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Porsche */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/porsche.png"
                  alt="Porsche screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#fa709a,#fee140)', color: '#fff' }}>Porsche</div>
                <div className="portfolio-info">
                  <h4>Porsche</h4>
                  <p>Luxury car brand interactive experience</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/porshe" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://yashhh710.github.io/porshe/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Pokedex */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/pokidex.png"
                  alt="Pokedex screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#a8edea,#fed6e3)', color: '#333' }}>Pokedex</div>
                <div className="portfolio-info">
                  <h4>Pokedex</h4>
                  <p>Pokemon database and search interface</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/pokedex" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://yashhh710.github.io/pokedex/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Home Port v1 */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-portfolios">
              <div className="portfolio-content h-100">
                <img
                  src="assets/project-img/home.png"
                  alt="Home Port v1 screenshot"
                  className="portfolio-thumb"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="portfolio-thumb-placeholder" style={{ display: 'none', background: 'linear-gradient(135deg,#ff9a56,#ff6a88)', color: '#fff' }}>Home Port v1</div>
                <div className="portfolio-info">
                  <h4>Home Port v1</h4>
                  <p>Modern home portfolio design</p>
                  <div className="portfolio-buttons">
                    <a href="https://github.com/Yashhh710/home-port-v1" target="_blank" rel="noopener noreferrer" className="btn-repo"><i className="bi bi-github"></i> Repo</a>
                    <a href="https://home-port-v1.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-live"><i className="bi bi-arrow-up-right-square"></i> Live</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
