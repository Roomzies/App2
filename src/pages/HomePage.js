import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleQuizStart = () => {
    navigate('/quiz');
  };

  return (
    <div className="homepage">
      <img
        src="https://i.imgur.com/7660pAo.jpg"
        alt="Roomsies Banner"
        className="banner-image"
      />

      <header className="hero">
        <div className="overlay">
          <h1>Welcome to Roomsies</h1>
          <p>Find your perfect roommate match with verified, compatible users.</p>
          <button className="cta-button" onClick={handleQuizStart}>
            Take the Compatibility Test
          </button>
        </div>
      </header>

      <section className="features">
        <h2>Why Choose Roomsies?</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Verified Users</h3>
            <p>All users are ID-verified to maintain a safe, scam-free environment.</p>
          </div>
          <div className="feature">
            <h3>Personality Matching</h3>
            <p>Our compatibility test helps you find roommates who fit your lifestyle.</p>
          </div>
          <div className="feature">
            <h3>Community Focused</h3>
            <p>Join a secure community-driven platform to make living arrangements easy.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About Roomsies</h2>
        <p>Roomsies is designed to help you find compatible roommates, create trustworthy connections, and facilitate safe shared housing. Take the compatibility test to start matching with your ideal roommates!</p>
      </section>
    </div>
  );
};

export default HomePage;
