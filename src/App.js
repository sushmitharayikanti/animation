import React from 'react';
import './App.css';
import im from "./photos/MotionArtEffect-logo.png";
import img1 from "./photos/motionarteffect-img1.png";
import img2 from "./photos/motionarteffect-img2.png";
import img3 from "./photos/motionarteffect-img3.png";
import img8 from "./photos/motionarteffect-img8.png";
import img9 from "./photos/motionarteffect-img9.png";
import img6 from "./photos/motionarteffect-img6.png";
import img7 from "./photos/motionarteffect-img7.png";
import img10 from "./photos/motionarteffect-img10.png";
import img11 from "./photos/motionarteffect-img11.png";

function App() {
  const starRating = (
    <>
      <span className="star">⭐</span>
      <span className="star">⭐</span>
      <span className="star">⭐</span>
      <span className="star">⭐</span>
      <span className="star">⭐</span>
    </>
  );

  return (
    <div className="App text-white">
      <header>
        <div className="logo">
          <img src={im} alt="Logo" />
        </div>
        <button className="buy-now">Buy Now</button>
      </header>
      <div class="smoke-container">
    <div class="smoke"></div>
     </div>
      <section id="hero" className='text-white'>
        <h1>Transform Your Website with Motion Art Effect</h1>
        <p>Attract Your Visitors' Attention With Colorful Motion Art Effect</p>
      </section>
      <section id="reviews">
        <div className="review">
          <img src={img1} alt="Review 1" />
          <div className="stars-and-rating">
            {starRating}
            <p>4.6 Rating, 8 Reviews</p>
          </div>
        </div>
        <div className="review">
          <img src={img2} alt="Review 2" />
          <div className="stars-and-rating">
            {starRating}
            <p>4.8 Rating, 12 Reviews</p>
          </div>
        </div>
        <div className="review">
          <img src={img3} alt="Review 3" />
          <div className="stars-and-rating">
            {starRating}
            <p>4.7 Rating, 15 Reviews</p>
          </div>
        </div>
      </section>
      <section id="features">
        <h2>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2>
        <center><button className="purchase-btn">Purchase From Envato</button></center>
        <div className="feature-img"></div>
      </section>
      <center>
      <section id="application" className='bg-black'>
        <h2>Apply On Any Section Or Enable For Whole Page</h2>
        <div className="apply-section">
        <img src={img10} alt="Browser Support" />
        </div>
        <div className="apply-page">
        <img src={img11} alt="Browser Support" />
        </div>
      </section>
      <section id="browser-support">
        <h2>Supported by All Popular Browsers</h2>
        <div className="browsers">
          <img src={img8} alt="Browser Support" />
        </div>
      </section>
      <section id="plugin-features">
        <h2>An All-Round Plugin With Powerful Features</h2>
        <img src={img9} alt="Logo" />
        <div className="feature">Light Weight</div>
        <img src={img6} alt="Logo" />
        <div className="feature">100% Responsive</div>
        <img src={img7} alt="Logo" />
        <div className="feature">User Friendly Interface</div>
      </section>
      </center>
      <footer className='text-white'>
        <p>© 2024 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
