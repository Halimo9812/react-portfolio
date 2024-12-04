import { FaGithub, FaHome, FaLinkedin, FaMailBulk ,FaPhone } from 'react-icons/fa'
import './Footer.css'
import React from 'react'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <section className="left">
            <address className="location">
              <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
              <div>
                <p>Boston, MA</p>
                <p>United States</p>
              </div>
            </address>
            <div className="phone">
              <h4>
                <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                617-955-1230
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                <a href="mailto:Halimoaali98@gmail.com" style={{ color: '#fff' }}>
                  Halimoaali98@gmail.com
                </a>
              </h4>
            </div>
          </section>
  
          <section className="right">
            <h4>More about me</h4>
            <p> I'm an aspiring web developer with a passion for coding and solving new challenges. I love learning about the latest technologies and working on exciting projects. Below, you'll find my social media links — feel free to connect with me!</p>
            <div className="social">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/hali98"  // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', marginRight: '1rem' }}
              >
                <FaLinkedin size={20} />
              </a>
  
              {/* GitHub */}
              <a
                href="https://github.com/Halimo9812"  // Replace with your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', marginRight: '1rem' }}
              >
                <FaGithub size={20} />
              </a>
            </div>
          </section>
        </div>
      </footer>
    );
  };
  
  export default Footer;