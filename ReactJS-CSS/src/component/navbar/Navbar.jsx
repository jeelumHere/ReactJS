import style from '../navbar/navbar.module.css';
import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <div className={style.navbar}>
        <ul className={style.navList}>
          <li><a href="#home">🏠 Home</a></li>
          <li><a href="#about">👤 About</a></li>
          <li><a href="#projects">🎨 Projects</a></li>
          <li><a href="#services">🔧 Services</a></li>
          <li><a href="#contact">📞 Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}