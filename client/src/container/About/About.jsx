import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { client } from '../../client';
// import { client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"] | order(priority asc)';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text"><span>About Me</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <div
            // whileInView={{ opacity: 1 }}
            // whileHover={{ scale: 1.1 }}
            // transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={index}
          >
            {/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
            {/* <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2> */}
            <p className="p-text-about" style={{ marginTop: 10 }}>{about.description}</p>
            <p className="p-text-about" style={{ marginTop: 10 }}>{about.description2}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
