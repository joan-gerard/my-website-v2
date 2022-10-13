import React, { useState, useEffect, useRef } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Projects.scss";

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const projectsCounted = useRef(false);
  const [filteredTagsCount, setFilteredTagsCount] = useState({
    All: 0,
    React: 0,
    Typescript: 0,
    MongoDB: 0,
    Apollo: 0,
    GraphQL: 0,
    "Next.js": 0,
  });

  useEffect(() => {
    if (projects?.length && projectsCounted?.current === false) {
      const filteredTagsKeys = Object.keys(filteredTagsCount);
      const updatedFilteredTagsCount = { ...filteredTagsCount };

      projects.map((project) =>
        project.tags.forEach((tag) => {
          if (filteredTagsKeys.includes(tag)) {
            updatedFilteredTagsCount[tag] += 1;
          }
        })
      );
      updatedFilteredTagsCount.All = projects.length;
      setFilteredTagsCount(updatedFilteredTagsCount);
      projectsCounted.current = true;
    }
  }, [filteredTagsCount, projects]);

  useEffect(() => {
    const query = '*[_type == "projects"] | order(priority desc)';

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProjects(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterProjects(projects);
      } else {
        setFilterProjects(projects.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const tags = [];
  useEffect(() => {
    projects.map((pjt) => tags.push([pjt.tags]));
  }, [projects]);

  return (
    <>
      <h2 className="head-text">
        My <span>Projects</span> Section
      </h2>

      <div className="app__work-filter">
        {Object.keys(filteredTagsCount).map((item, index) => (
          <>
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
              <p className="filter-count">{filteredTagsCount[item]}</p>
            </div>
          </>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterProjects.map((work, index) => (
          <div className="app__work-item" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                {work.projectLink && (
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content project__flex">
              <div className="">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>
              </div>

              {/* <div className="app__work-tag app__flex">
                <p className="">{work.tags[0]}</p>
              </div> */}
              <div className="app__work-tag">
                {work.tags.map((tag, i) => (
                  <p key={i}>{tag}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "projects",
  "app__primarybg"
);
