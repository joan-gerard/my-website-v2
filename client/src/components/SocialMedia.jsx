import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import './SocialMedia.scss';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/joangerard/" className="app__social-link">
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://github.com/joan-gerard" className="app__social-link">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="mailto:joan-gerard@outlook.com" className="app__social-link">
        <AiFillMail />
      </a>
    </div>
  </div>
);

export default SocialMedia;
