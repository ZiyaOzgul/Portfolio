import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I Know</p>
        <h2 className={`${styles.sectionHeadText} text-center mt-10`}>
          Techs.
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28 cursor-pointer" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
