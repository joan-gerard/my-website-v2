import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import './SocialMedia.scss';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/joangerard/" className="app__social-link">
      <div>
        <FaLinkedinIn />
      </div>
    </a>
    <a href="https://github.com/joan-gerard" className="app__social-link">
      <div>
        <FaGithub />
      </div>
    </a>
    <a href="mailto:joan-gerard@outlook.com" className="app__social-link">
      <div>
        <AiFillMail />
      </div>
    </a>
  </div>
);

export default SocialMedia;
