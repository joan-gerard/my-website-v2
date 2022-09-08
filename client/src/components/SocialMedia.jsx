import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <FaLinkedinIn />
    </div>
    <div>
      <FaGithub />
    </div>
    <div>
      <AiFillMail />
    </div>
  </div>
);

export default SocialMedia;
