import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className={`xs:w-[250px] w-full`}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-[20px] bg-tertiary px-12 py-5 min-h-[280px] flex items-center justify-evenly flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain " />
          <h3 className="text-white text-xl text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="mt-4 w-full h-auto mx-auto"
      >
        <p className={`${styles.sectionSubText}`}>Intruduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-lg max-w-3xl lead-[30px]"
      >
        I'm a skilled software developer with experience in JavaScript, and
        expertise in frameworks like React, Node.js. I'm a quick learner and
        collaborate closely with clients to create efficient, scalable, and
        user-friendly solutions that solve real-world problems. Let's work
        together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
