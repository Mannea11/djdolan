import React from 'react';
import './MyStyle.css';

function MyComponent() {
  
  const handleImageClick = (location) => {
    alert(`You selected ${location}`);
  };


  return (
    <div className="hero-section">
    <nav className="navbar">
      <div className="logo">DJ DOLAN</div>
      <ul className="nav-links">
        <li><a href="#web-store">Web store</a></li>
        <li><a href="#sweden">Sweden</a></li>
        <li><a href="#uk">UK</a></li>
        <li><a href="#aotearoa">Aotearoa</a></li>
      </ul>
    </nav>


      <div class="spotify-player-container">
           <div class="spotify-player">
          <iframe src="https://open.spotify.com/embed/playlist/5yUFGowVv0WRuHieSYVB1C?utm_source=generator&theme=0" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        </div>
    
      

        <div className="gallery">
        <div className="gallery-item" onClick={() => handleImageClick('Sweden')}>
          <img src="sweden.jpg" alt="Sweden" />
          <p className="location-name">Sweden</p>
        </div>
        <div className="gallery-item" onClick={() => handleImageClick('UK')}>
          <img src="uk.jpg" alt="UK" />
          <p className="location-name">United Kingdom</p>
        </div>
        <div className="gallery-item" onClick={() => handleImageClick('Aotearoa')}>
          <img src="aotearoa.jpg" alt="Aotearoa" />
          <p className="location-name">Aotearoa</p>
        </div>
      </div>
    </div>
  );
}
export default MyComponent;