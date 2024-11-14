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
          <li className="nav-item">
            <a href="#web-store">Web store</a>
          </li>
          <li className="nav-item">
            <a href="#sweden"><img 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/800px-Flag_of_Sweden.svg.png" 
              alt="Sverige" 
              className="flag-icon" 
            /> Sverige</a>
          </li>
          <li className="nav-item">
            <a href="#uk"><img 
              src="https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_1280.jpg" 
              alt="UK" 
              className="flag-icon" 
            /> UK</a>
          </li>
          <li className="nav-item">
            <a href="#aotearoa"><img 
              src="https://nzhistory.govt.nz/sites/default/files/styles/wide/public/images/maori-national-flag.gif?itok=E_OFsNI3" 
              alt="aote" 
              className="flag-icon" 
            /> Aotearoa</a>
          </li>
        </ul>
      </nav>


      <div class="spotify-player-container">
           <div class="spotify-player">
          <iframe src="https://open.spotify.com/embed/playlist/5yUFGowVv0WRuHieSYVB1C?utm_source=generator&theme=0" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        </div>
    </div>
  );
}
export default MyComponent;