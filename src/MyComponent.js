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
            <a href="#sweden">
 <img src={process.env.PUBLIC_URL + "/images/sweden.jpg"} alt="Sverige" className="flag-icon" /> Sverige</a>
          </li>
          <li className="nav-item">
            <a href="#uk"><img src={process.env.PUBLIC_URL + "/images/uk.jpg"}
              alt="UK" 
              className="flag-icon" 
            /> UK</a>
          </li>
          <li className="nav-item">
            <a href="#aotearoa"><img src={process.env.PUBLIC_URL + "/images/aotearoa.jpg"}
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