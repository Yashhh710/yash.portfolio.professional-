import React from 'react';
import './Header.css';

const Header = () => {
  const toggleSidebar = () => {
    const header = document.getElementById('header');
    const toggleBtn = document.querySelector('.header-toggle');
    if (header && toggleBtn) {
      header.classList.toggle('header-show');
      toggleBtn.classList.toggle('bi-list');
      toggleBtn.classList.toggle('bi-x');
    }
  };

  return (
    <i className="header-toggle d-xl-none bi bi-list" onClick={toggleSidebar}></i>
  );
};

export default Header;
