import React from 'react';
import '../../styles/SayHi.css';
import myImg from '../../assets/images/SayHi.jpg';

import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SayHi = () => {
  return (
    <section className="say-hi-section">
      <h1 className="say-hi-title">Say hi<span className="typing-dot">.</span><span className="typing-dot">.</span><span className="typing-dot">.</span></h1>
      <div className="say-hi-content">
        <div className="say-hi-left">
          <div className="contact-info">
            <h2>
                <a href="mailto:padbdilshan@gmail.com">
                Hi@
                <br />
                portfolio.com
              </a>
            </h2>
            <hr />
            <p>
              I love to design and make things.
             <br /> Feel free to get in touch. <a href="mailto:padbdilshan@gmail.com">Say hi!</a>
            </p>
            <div className="personal-info">
              <p>Banuka Dilshan</p>
              <p>Colombo, Sri Lanka</p>
            </div>
            <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://github.com/banuka2001" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
            </div>
          </div>
        </div>
        <div className="say-hi-right">
          <img src={myImg} alt="A portrait" />
        </div>
      </div>
    </section>
  );
};

export default SayHi;
