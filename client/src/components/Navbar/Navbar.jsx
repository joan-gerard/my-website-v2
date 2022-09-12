import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import { BsInstagram, BsTwitter } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';

import { images } from '../../constants';
import './Navbar.scss';
import SocialMedia from '../SocialMedia';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logoSVG} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            {/* <div /> */}
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <SocialMedia />

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="app__navbar-menu-list"
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="app__navbar-menu-socials">
              <a href="https://www.linkedin.com/in/joangerard/" target="_blank" rel="noopener noreferrer" className="app__social-link">
                <div>
                  <FaLinkedinIn />
                </div>
              </a>
              <a href="https://github.com/joan-gerard" target="_blank" rel="noopener noreferrer" className="app__social-link">
                <div>
                  <FaGithub />
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
