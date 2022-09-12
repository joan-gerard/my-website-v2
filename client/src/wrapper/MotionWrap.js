import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = (Component, classNames) => function HOC() {
  let boxVariants = {};
  const isMobile = window.innerWidth < 768; // Add the width you want to check for here (now 768px)
  if (!isMobile) {
    boxVariants = {
      view: {
        y: [100, 50, 0],
        opacity: [0, 1],
      },
      transition: {
        duration: 0.6,
      },
    };
  }
  // if the width >= 768px, boxVariants will be empty, resulting in no animation
  // you need to refresh the page, it doesn't work when you resize it!

  return (
    <motion.div
      variants={boxVariants}
      whileInView="view"
      transition="transition"
      className={`${classNames} app__flex`}
    >
      <Component />
    </motion.div>
  );
};

export default MotionWrap;
